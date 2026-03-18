/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useLayoutEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

interface MousePosition {
  x: number;
  y: number;
}

interface AnimationSettings {
  opacity?: number;
  ease?: string;
  duration?: number;
  delay?: number;
  x?: number;
  y?: number;
  scrollTrigger?: ScrollTrigger.Vars;
}

// new landings
interface SplitTextConstructor {
  new (
    element: Element | string,
    vars?: {
      type?: string;
      linesClass?: string;
      wordsClass?: string;
      charsClass?: string;
    }
  ): {
    chars: Element[];
    words: Element[];
    lines: Element[];
    split: (vars?: { type?: string }) => void;
  };
}

interface BreakpointConfig {
  scaleStart: number;
  xStart: number;
  yStart: number;
  scaleMiddle: number;
  xMiddle: number;
  yMiddle: number;
  scaleEnd: number;
  xEnd: number;
  yEnd: number;
}

interface Breakpoints {
  small: BreakpointConfig;
  large: BreakpointConfig;
}

interface AnimateItemsConfig {
  containerSelector: string;
  itemSelector: string;
  childCount: number;
  xOffset: number;
  opacity: number;
  duration: number;
  stagger: number;
  startTrigger: string;
  deviceWidthThreshold?: number;
}

interface ScrollAnimationConfig {
  triggerSelector: string;
  itemsSelector: string;
  scrollDuration?: number;
  deviceWidthThreshold?: number;
  xPercentMultiplier?: number;
  snapMultiplier?: number;
  num?: number;
}

declare global {
  interface Window {
    SplitText: SplitTextConstructor;
    gsap?: typeof gsap;
    ScrollTrigger?: typeof ScrollTrigger;
  }
}

const useGSAPAnimations = (): void => {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);
  const cleanupRef = useRef<(() => void) | null>(null);
  const previousPathname = useRef<string>(pathname);

  // Emergency cleanup on pathname change - runs IMMEDIATELY
  useEffect(() => {
    if (
      previousPathname.current !== pathname &&
      typeof window !== "undefined"
    ) {
      // Pathname changed - kill everything immediately
      // console.log("[GSAP] Pathname changed from", previousPathname.current, "to", pathname);
      try {
        // Try to access already-loaded GSAP modules from window
        const gsapModule = window.gsap;
        const ScrollTriggerModule = window.ScrollTrigger;

        if (ScrollTriggerModule) {
          const triggers = ScrollTriggerModule.getAll();
          // console.log("[GSAP] Killing", triggers.length, "ScrollTriggers");
          triggers.forEach((t: ScrollTrigger) => {
            try {
              t.kill(true);
            } catch (e) {
              console.error("[GSAP] Failed to kill trigger:", e);
            }
          });
        } else {
          console.warn("[GSAP] ScrollTrigger not found on window");
        }

        if (gsapModule) {
          // console.log("[GSAP] Killing all tweens");
          gsapModule.killTweensOf("*");
        } else {
          console.warn("[GSAP] gsap not found on window");
        }
      } catch (e) {
        console.error("[GSAP] Emergency cleanup failed:", e);
      }
    }
    previousPathname.current = pathname;
  }, [pathname]);

  // Only run on client side after hydration is complete
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    let smoother: ScrollSmoother | null = null;
    let ScrollTriggerInstance: typeof ScrollTrigger | null = null;
    let gsapInstance: typeof gsap | null = null;
    const scrollTriggers: ScrollTrigger[] = [];
    const eventCleanups: Array<() => void> = [];
    let isCleaningUp = false;

    const killAllAnimations = () => {
      if (isCleaningUp) return;
      isCleaningUp = true;

      // Kill event listeners
      eventCleanups.forEach((cleanup) => {
        try {
          cleanup();
        } catch (e) {
          console.warn("Event cleanup failed:", e);
        }
      });

      // Kill smoother
      if (smoother) {
        try {
          smoother.kill();
          smoother = null;
        } catch (e) {
          console.warn("Smoother cleanup failed:", e);
        }
      }

      // Kill all GSAP animations
      if (gsapInstance) {
        try {
          gsapInstance.killTweensOf("*");
        } catch (e) {
          console.warn("GSAP killTweensOf failed:", e);
        }
      }

      // Kill all ScrollTriggers
      if (ScrollTriggerInstance) {
        try {
          const allTriggers = ScrollTriggerInstance.getAll();
          allTriggers.forEach((t: ScrollTrigger) => {
            try {
              t.kill(true);
            } catch (e) {
              console.warn("ScrollTrigger kill failed:", e);
            }
          });
        } catch (e) {
          console.warn("ScrollTrigger cleanup failed:", e);
        }
      }
    };

    // Store cleanup function in ref for external access
    cleanupRef.current = killAllAnimations;

    const initializeGSAP = async () => {
      try {
        const { default: gsap } = await import("gsap");
        const { default: ScrollTrigger } = await import("gsap/ScrollTrigger");
        const { default: ScrollToPlugin } = await import("gsap/ScrollToPlugin");
        const { default: ScrollSmoother } = await import("gsap/ScrollSmoother");
        const { default: SplitText } = await import("gsap/SplitText");

        // Store instances for cleanup
        gsapInstance = gsap;
        ScrollTriggerInstance = ScrollTrigger;

        // Register globally for emergency cleanup
        if (typeof window !== "undefined") {
          window.gsap = gsap;
          window.ScrollTrigger = ScrollTrigger;
        }

        await new Promise((resolve) => {
          if (document.readyState === "complete") {
            resolve(true);
          } else {
            window.addEventListener("load", () => resolve(true), {
              once: true,
            });
          }
        });

        gsap.registerPlugin(
          ScrollTrigger,
          ScrollToPlugin,
          ScrollSmoother,
          SplitText
        );
        gsap.config({ nullTargetWarn: false });

        const deviceWidth: number = window.innerWidth;

        const initGSAP = (): void => {
          const wrapper: HTMLElement | null =
            document.querySelector("#smooth-wrapper");
          const content: HTMLElement | null =
            document.querySelector("#smooth-content");

          if (!wrapper || !content) {
            return;
          }

          // Kill existing animations before creating new ones
          ScrollTrigger.getAll().forEach((t: ScrollTrigger) => {
            try {
              t.kill(true);
            } catch (e) {}
          });
          gsap.killTweensOf("*");

          if (deviceWidth > 767 && wrapper && content) {
            smoother = ScrollSmoother.create({
              wrapper: "#smooth-wrapper",
              content: "#smooth-content",
              smooth: 0.9,
              effects: deviceWidth < 1025 ? false : true,
              smoothTouch: 0.1,
              normalizeScroll: {
                allowNestedScroll: true,
              },
              ignoreMobileResize: true,
            });
          }

          const gsapFadeAnimations = (): void => {
            const fadeArrayItems: NodeListOf<Element> =
              document.querySelectorAll(".fade-anim");

            if (fadeArrayItems.length > 0) {
              const fadeArray: Element[] = gsap.utils.toArray(".fade-anim");

              fadeArray.forEach((item: Element) => {
                const fadeDirection: string =
                  item.getAttribute("data-direction") || "bottom";
                const onScrollValue: string =
                  item.getAttribute("data-on-scroll") || "1";
                const durationValue: string =
                  item.getAttribute("data-duration") || "1.15";
                const fadeOffset: number =
                  Number(item.getAttribute("data-offset")) || 50;
                const delayValue: string =
                  item.getAttribute("data-delay") || "0.15";
                const easeValue: string =
                  item.getAttribute("data-ease") || "power2.out";

                const animationSettings: AnimationSettings = {
                  opacity: 0,
                  ease: easeValue,
                  duration: Number(durationValue),
                  delay: Number(delayValue),
                };

                switch (fadeDirection) {
                  case "top":
                    animationSettings.y = -fadeOffset;
                    break;
                  case "bottom":
                    animationSettings.y = fadeOffset;
                    break;
                  case "left":
                    animationSettings.x = -fadeOffset;
                    break;
                  case "right":
                    animationSettings.x = fadeOffset;
                    break;
                  default:
                    break;
                }

                if (Number(onScrollValue) === 1) {
                  animationSettings.scrollTrigger = {
                    trigger: item as Element,
                    start: "top 85%",
                  };
                }

                gsap.from(item, animationSettings);
              });
            }
          };

          const gsapImageRevealAnimations = (): void => {
            const revealItems: NodeListOf<Element> =
              document.querySelectorAll(".img_anim_reveal");

            revealItems.forEach((reveal: Element) => {
              const image: HTMLImageElement | null =
                reveal.querySelector("img");
              if (!image) return;

              const tl: gsap.core.Timeline = gsap.timeline({
                scrollTrigger: {
                  trigger: reveal,
                  start: "top 50%",
                  toggleActions: "play none none none",
                },
              });

              tl.set(reveal, { autoAlpha: 1 });
              tl.from(reveal, {
                yPercent: -100,
                duration: 1.5,
                ease: "power2.out",
              });
              tl.from(image, {
                yPercent: 100,
                scale: 1.3,
                duration: 1.5,
                delay: -1.5,
                ease: "power2.out",
              });
            });
          };

          const gsapHeaderStackingAnimation = (): void => {
            const mm = gsap.matchMedia();

            if (
              document.querySelectorAll(".header-stacking-items").length > 0
            ) {
              mm.add("(min-width: 991px)", () => {
                const items: Element[] = gsap.utils.toArray(".item");

                items.forEach((item: Element, i: number) => {
                  const content: HTMLElement | null =
                    item.querySelector(".body");
                  const header: HTMLElement | null =
                    item.querySelector(".header");
                  if (!content || !header) return;

                  const anim = gsap.to(content, {
                    height: 0,
                    ease: "none",
                    scrollTrigger: {
                      trigger: item,
                      start: "top " + header.clientHeight * i,
                      endTrigger: ".final",
                      end: "top " + header.clientHeight * items.length,
                      pin: true,
                      pinSpacing: false,
                      scrub: true,
                    },
                  });
                  if (anim && anim.scrollTrigger) {
                    scrollTriggers.push(anim.scrollTrigger as ScrollTrigger);
                  }
                });
              });
            }
          };

          const gsapWorkPanelAnimation = (): void => {
            if (document.querySelectorAll(".work-panel").length > 0) {
              const mm = gsap.matchMedia();

              mm.add("(min-width: 991px)", () => {
                const tl: gsap.core.Timeline = gsap.timeline();
                const scaleItems: NodeListOf<Element> =
                  document.querySelectorAll(".work-panel");

                scaleItems.forEach((item: Element) => {
                  tl.to(item, {
                    scrollTrigger: {
                      trigger: item,
                      pin: item,
                      scrub: 1,
                      start: "top 10%",
                      end: "bottom 90%",
                      endTrigger: ".work-area-4",
                      pinSpacing: false,
                      markers: false,
                    },
                  });
                });
              });
            }
          };

          const gsapPortfolioPanelAnimation = (): void => {
            if (document.querySelectorAll(".portfolio-panel").length > 0) {
              const mm = gsap.matchMedia();

              mm.add("(min-width: 991px)", () => {
                const tl: gsap.core.Timeline = gsap.timeline();
                const scaleItems: NodeListOf<Element> =
                  document.querySelectorAll(".portfolio-panel");

                gsap.set(scaleItems, {
                  scale: 1,
                });

                scaleItems.forEach((item: Element) => {
                  tl.to(item, {
                    scale: 0.8,
                    scrollTrigger: {
                      trigger: item,
                      pin: item,
                      scrub: 1,
                      start: "top 10%",
                      end: "bottom 90%",
                      endTrigger: ".work-area-3",
                      pinSpacing: false,
                      markers: false,
                    },
                  });
                });
              });
            }
          };

          const gsapButtonParallaxAnimation = (): void => {
            const allBtn: HTMLElement[] =
              gsap.utils.toArray<HTMLElement>(".btn-move");
            const allBtnCircle: HTMLElement[] =
              gsap.utils.toArray<HTMLElement>(".btn-item");

            allBtn.forEach((btn: HTMLElement, i: number) => {
              const circle: HTMLElement = allBtnCircle[i];

              const parallaxIt = (
                e: MouseEvent,
                target: HTMLElement,
                movement: number = 80
              ): void => {
                const bounds: DOMRect = btn.getBoundingClientRect();
                const relX: number = e.clientX - bounds.left;
                const relY: number = e.clientY - bounds.top;

                gsap.to(target, {
                  x: ((relX - bounds.width / 2) / bounds.width) * movement,
                  y: ((relY - bounds.height / 2) / bounds.height) * movement,
                  scale: 1.1,
                  ease: "power2.out",
                  duration: 0.3,
                });
              };

              const resetParallax = (): void => {
                gsap.to(circle, {
                  x: 0,
                  y: 0,
                  scale: 1,
                  ease: "power2.out",
                  duration: 0.3,
                });
              };

              btn.addEventListener("mousemove", (e: MouseEvent) =>
                parallaxIt(e, circle)
              );
              btn.addEventListener("mouseleave", resetParallax);
            });
          };

          const gsapTextRevealAnimation = (): void => {
            const textAnimationElements: Element[] =
              gsap.utils.toArray(".move-anim");

            if (!textAnimationElements.length) return;

            textAnimationElements.forEach((splitTextLine: Element) => {
              const delayValue: number = parseFloat(
                splitTextLine.getAttribute("data-delay") || "0.1"
              );

              const tl: gsap.core.Timeline = gsap.timeline({
                scrollTrigger: {
                  trigger: splitTextLine,
                  start: "top 85%",
                  toggleActions: "play none none none",
                },
              });

              const itemSplitted = new SplitText(splitTextLine as Element, {
                type: "lines",
              });

              gsap.set(splitTextLine, {
                perspective: 400,
              });

              itemSplitted.split({ type: "lines" });

              tl.from(itemSplitted.lines, {
                duration: 1,
                delay: delayValue,
                opacity: 0,
                rotationX: -80,
                force3D: true,
                transformOrigin: "top center -50",
                stagger: 0.1,
              });
            });
          };

          const gsapWordAnimation = (): void => {
            const wordItems: NodeListOf<Element> =
              document.querySelectorAll(".word-anim");
            if (!wordItems.length) return;

            wordItems.forEach((wordItem: Element) => {
              const stagger: number = parseFloat(
                wordItem.getAttribute("data-stagger") || "0.04"
              );
              const translateX: number = parseFloat(
                wordItem.getAttribute("data-translateX") || "0"
              );
              const translateY: number = parseFloat(
                wordItem.getAttribute("data-translateY") || "0"
              );
              const onScroll: number = parseInt(
                wordItem.getAttribute("data-on-scroll") || "1"
              );
              const delay: number = parseFloat(
                wordItem.getAttribute("data-delay") || "0.1"
              );
              const duration: number = parseFloat(
                wordItem.getAttribute("data-duration") || "0.75"
              );

              const splitWord = new SplitText(wordItem as Element, {
                type: "chars, words",
              });

              const animationProps: gsap.TweenVars & {
                scrollTrigger?: ScrollTrigger.Vars;
              } = {
                duration,
                delay,
                autoAlpha: 0,
                stagger,
              };

              if (translateX) animationProps.x = translateX;
              if (translateY) animationProps.y = translateY;
              if (!translateX && !translateY) animationProps.x = 20;

              if (onScroll === 1) {
                animationProps.scrollTrigger = {
                  trigger: wordItem,
                  start: "top 90%",
                };
              }

              gsap.from(splitWord.words, animationProps);
            });
          };

          const gsapCharAnimation = (): void => {
            const charItems: NodeListOf<Element> =
              document.querySelectorAll(".char-anim");
            if (!charItems.length) return;

            charItems.forEach((item: Element) => {
              const stagger: number = parseFloat(
                item.getAttribute("data-stagger") || "0.05"
              );
              const xVal: number = parseFloat(
                item.getAttribute("data-translateX") || "0"
              );
              const yVal: number = parseFloat(
                item.getAttribute("data-translateY") || "0"
              );
              const onScroll: number = parseInt(
                item.getAttribute("data-on-scroll") || "1"
              );
              const delay: number = parseFloat(
                item.getAttribute("data-delay") || "0.1"
              );
              const duration: number = parseFloat(
                item.getAttribute("data-duration") || "1"
              );
              const ease: string =
                item.getAttribute("data-ease") || "power2.out";

              const split = new SplitText(item as Element, {
                type: "chars, words",
              });

              const animProps: gsap.TweenVars & {
                scrollTrigger?: ScrollTrigger.Vars;
              } = {
                duration,
                delay,
                autoAlpha: 0,
                stagger,
                ease,
              };

              if (xVal) animProps.x = xVal;
              if (yVal) animProps.y = yVal;
              if (!xVal && !yVal) animProps.x = 50;

              if (onScroll === 1) {
                animProps.scrollTrigger = {
                  trigger: item,
                  start: "top 85%",
                };
              }

              gsap.from(split.chars, animProps);
            });
          };

          const initButtonParallaxEffect = (): void => {
            const mouse: MousePosition = { x: 0, y: 0 };
            const pos: MousePosition = { x: 0, y: 0 };
            const ratio: number = 0.65;
            let active: boolean = false;

            const allParallax: NodeListOf<HTMLElement> =
              document.querySelectorAll(".parallax-wrap");

            allParallax.forEach((el: HTMLElement) => {
              el.addEventListener("mousemove", mouseMoveBtn);

              el.addEventListener("mouseenter", function (this: HTMLElement) {
                gsap.to(this, { duration: 0.3, scale: 2 });
                gsap.to(this.children, { duration: 0.3, scale: 0.5 });
                active = true;
              });

              el.addEventListener("mouseleave", function (this: HTMLElement) {
                gsap.to(this, { duration: 0.3, scale: 1 });
                gsap.to(this.children, { duration: 0.3, scale: 1, x: 0, y: 0 });
                active = false;
              });

              el.addEventListener(
                "mousemove",
                function (this: HTMLElement, e: MouseEvent) {
                  parallaxCursorBtn(e, this, 2);
                  callParallaxBtn(e, this);
                }
              );
            });

            function mouseMoveBtn(e: MouseEvent): void {
              const scrollTop: number =
                window.pageYOffset || document.documentElement.scrollTop;
              mouse.x = e.pageX;
              mouse.y = e.pageY - scrollTop;
            }

            gsap.ticker.add(updatePosition);

            function updatePosition(): void {
              pos.x += (mouse.x - pos.x) * ratio;
              pos.y += (mouse.y - pos.y) * ratio;
            }

            function callParallaxBtn(e: MouseEvent, parent: HTMLElement): void {
              const target: HTMLElement | null =
                parent.querySelector(".parallax-element");
              if (!target) return;
              parallaxItBtn(e, parent, target, 20);
            }

            function parallaxItBtn(
              e: MouseEvent,
              parent: HTMLElement,
              target: HTMLElement,
              movement: number
            ): void {
              const boundingRect: DOMRect = parent.getBoundingClientRect();
              const scrollTop: number =
                window.pageYOffset || document.documentElement.scrollTop;
              const relX: number = e.pageX - boundingRect.left;
              const relY: number = e.pageY - boundingRect.top;

              gsap.to(target, {
                duration: 0.3,
                x:
                  ((relX - boundingRect.width / 2) / boundingRect.width) *
                  movement,
                y:
                  ((relY - boundingRect.height / 2 - scrollTop) /
                    boundingRect.height) *
                  movement,
                ease: "power2.out",
              });
            }

            function parallaxCursorBtn(
              e: MouseEvent,
              parent: HTMLElement,
              movement: number
            ): void {
              const rect: DOMRect = parent.getBoundingClientRect();
              const scrollTop: number =
                window.pageYOffset || document.documentElement.scrollTop;
              const relX: number = e.pageX - rect.left;
              const relY: number = e.pageY - rect.top;

              pos.x =
                rect.left + rect.width / 2 + (relX - rect.width / 2) / movement;
              pos.y =
                rect.top +
                rect.height / 2 +
                (relY - rect.height / 2 - scrollTop) / movement;
            }
          };

          const initPinAnimation = (): void => {
            const pinFixed: HTMLElement | null =
              document.querySelector(".pin-element");
            const deviceWidth: number = window.innerWidth;

            ScrollTrigger.getAll().forEach((st: ScrollTrigger) => {
              if (st.trigger === pinFixed) {
                st.kill();
              }
            });

            if (pinFixed && deviceWidth > 991) {
              gsap.to(pinFixed, {
                scrollTrigger: {
                  trigger: ".pin-area",
                  pin: pinFixed,
                  start: "top top",
                  end: "bottom bottom",
                  pinSpacing: false,
                },
              });
            }
          };

          const initPinOnBottom = (): void => {
            const pinOnBottomElements: NodeListOf<Element> =
              document.querySelectorAll(".pin-on-bottom");

            pinOnBottomElements.forEach((el: Element) => {
              const anim = gsap.to(el, {
                paddingBottom: "500px",
                ease: "none",
                scrollTrigger: {
                  trigger: el,
                  pin: true,
                  start: "bottom 90%",
                  end: "bottom top",
                  pinSpacing: false,
                  scrub: 3,
                },
              });
              if (anim && anim.scrollTrigger) {
                scrollTriggers.push(anim.scrollTrigger as ScrollTrigger);
              }
            });
          };

          const smoothScrollToAnchors = (): void => {
            document
              .querySelectorAll('a[href^="#"]')
              .forEach((anchor: Element) => {
                anchor.addEventListener(
                  "click",
                  function (this: HTMLAnchorElement, e: Event) {
                    e.preventDefault();
                    const targetId: string =
                      this.getAttribute("href")!.substring(1);
                    const targetElement: HTMLElement | null =
                      document.getElementById(targetId);

                    if (targetElement) {
                      window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: "smooth",
                      });
                    }
                  }
                );
              });
          };

          // new landing anim
          const initHeroTitleAnimation = (): void => {
            const words: NodeListOf<HTMLElement> =
              document.querySelectorAll(".word-animation");

            if (words.length <= 0) {
              return;
            }

            words.forEach((word: HTMLElement) => {
              const characters: string = word.innerHTML
                .split("")
                .map((char: string) => {
                  if (char === " ") {
                    return `<span class="char">&nbsp;</span>`;
                  }
                  return `<span class="char">${char}</span>`;
                })
                .join("");
              word.innerHTML = characters;
            });

            const charElements: NodeListOf<Element> =
              document.querySelectorAll(".char");

            if (charElements.length > 0) {
              gsap.from(".char", {
                duration: 1,
                opacity: 0,
                y: 100,
                ease: "power3.out",
                stagger: 0.05,
                // delay: 2,
              });
            }
          };

          const initButtonHoverAnimation = (): void => {
            const btnHoverElements: NodeListOf<HTMLElement> =
              document.querySelectorAll(".btn-hover");

            if (btnHoverElements.length <= 0) {
              return;
            }

            btnHoverElements.forEach((btn: HTMLElement) => {
              btn.addEventListener("mouseenter", (e: MouseEvent): void => {
                const rect: DOMRect = btn.getBoundingClientRect();
                const x: number = e.pageX - rect.left - window.scrollX;
                const y: number = e.pageY - rect.top - window.scrollY;

                const span: HTMLElement | null = btn.querySelector("span");
                if (span) {
                  span.style.top = y + "px";
                  span.style.left = x + "px";
                }
              });

              btn.addEventListener("mouseout", (e: MouseEvent): void => {
                const rect: DOMRect = btn.getBoundingClientRect();
                const x: number = e.pageX - rect.left - window.scrollX;
                const y: number = e.pageY - rect.top - window.scrollY;

                const span: HTMLElement | null = btn.querySelector("span");
                if (span) {
                  span.style.top = y + "px";
                  span.style.left = x + "px";
                }
              });
            });

            const allBtnElements: HTMLElement[] =
              gsap.utils.toArray(".btn-hover");
            const allBtnCircles: HTMLElement[] =
              gsap.utils.toArray(".btn-item");

            if (allBtnElements.length > 0 && allBtnCircles.length > 0) {
              allBtnElements.forEach((btn: HTMLElement, i: number) => {
                const circle: HTMLElement = allBtnCircles[i];
                if (!circle) return;

                const parallaxIt = (
                  e: MouseEvent,
                  target: HTMLElement,
                  movement: number
                ): void => {
                  const rect: DOMRect = btn.getBoundingClientRect();
                  const relX: number = e.pageX - rect.left - window.scrollX;
                  const relY: number = e.pageY - rect.top - window.scrollY;

                  gsap.to(target, {
                    duration: 0.5,
                    x: ((relX - rect.width / 2) / rect.width) * movement,
                    y: ((relY - rect.height / 2) / rect.height) * movement,
                    ease: "power2.out",
                  });
                };

                btn.addEventListener("mousemove", (e: MouseEvent): void => {
                  parallaxIt(e, circle, 80);
                });

                btn.addEventListener("mouseleave", (): void => {
                  gsap.to(circle, {
                    duration: 0.5,
                    x: 0,
                    y: 0,
                    ease: "power2.out",
                  });
                });
              });
            }
          };

          const initFadeUpAnimation = (): void => {
            const fadeArrayItems: NodeListOf<Element> =
              document.querySelectorAll(".fade_up_anim");

            if (fadeArrayItems.length === 0) {
              return;
            }

            const fadeArray: Element[] = gsap.utils.toArray(".fade_up_anim");

            fadeArray.forEach((item: Element) => {
              const fadeDirection: string =
                item.getAttribute("data-fade-from") || "bottom";
              const onScrollValue: number = 1;
              const durationValue: number = parseFloat(
                item.getAttribute("data-duration") || "0.75"
              );
              const fadeOffset: number = 40;
              const delayValue: number = parseFloat(
                item.getAttribute("data-delay") || "0.15"
              );
              const easeValue: string = "power2.out";

              const animationSettings: gsap.TweenVars & {
                scrollTrigger?: ScrollTrigger.Vars;
              } = {
                opacity: 0,
                ease: easeValue,
                duration: durationValue,
                delay: delayValue,
              };

              switch (fadeDirection) {
                case "top":
                  animationSettings.y = -fadeOffset;
                  break;
                case "left":
                  animationSettings.x = -fadeOffset;
                  break;
                case "bottom":
                  animationSettings.y = fadeOffset;
                  break;
                case "right":
                  animationSettings.x = fadeOffset;
                  break;
                default:
                  animationSettings.y = fadeOffset;
                  break;
              }

              if (onScrollValue === 1) {
                animationSettings.scrollTrigger = {
                  trigger: item as Element,
                  start: "top bottom",
                  markers: false,
                };
              }

              gsap.from(item, animationSettings);
            });
          };

          const initWorkDigitalAnimation = (): void => {
            const workDigital: HTMLElement | null =
              document.querySelector(".work-digital");
            const workDigitalTitle: HTMLElement | null = document.querySelector(
              ".work-digital .section__header-sub-title-v12"
            );

            if (!workDigitalTitle || !workDigital) {
              return;
            }

            if (deviceWidth > 992) {
              gsap.from(".work-digital .section__header-sub-title-v12", {
                x: -200,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                  trigger: workDigital,
                  start: "top center",
                  toggleActions: "play none none none",
                },
              });
            }
          };

          const initResponsiveBreakpointAnimation = (): void => {
            const breakpoints: Breakpoints = {
              small: {
                scaleStart: 0,
                xStart: -150,
                yStart: -100,
                scaleMiddle: 0.5,
                xMiddle: -100,
                yMiddle: -50,
                scaleEnd: 1,
                xEnd: 0,
                yEnd: 0,
              },
              large: {
                scaleStart: 0,
                xStart: -300,
                yStart: -200,
                scaleMiddle: 0.5,
                xMiddle: -250,
                yMiddle: -100,
                scaleEnd: 1,
                xEnd: 0,
                yEnd: 0,
              },
            };

            const getBreakpoint = (): BreakpointConfig => {
              if (deviceWidth < 768) {
                return breakpoints.small;
              } else {
                return breakpoints.large;
              }
            };

            const workDigital: HTMLElement | null =
              document.querySelector(".work-digital");
            const workDigitalTitle: HTMLElement | null = document.querySelector(
              ".work-digital .section__header-title-v12"
            );

            if (!workDigital || !workDigitalTitle) {
              return;
            }

            const applyAnimation = (): void => {
              const bp: BreakpointConfig = getBreakpoint();

              if (deviceWidth > 992) {
                gsap.fromTo(
                  ".work-digital .section__header-title-v12",
                  {
                    scale: bp.scaleStart,
                    x: bp.xStart,
                    y: bp.yStart,
                  },
                  {
                    scale: bp.scaleMiddle,
                    x: bp.xMiddle,
                    y: bp.yMiddle,
                    duration: 1,
                    scrollTrigger: {
                      trigger: workDigital,
                      start: "top center",
                      toggleActions: "play none none none",
                    },
                    onComplete: (): void => {
                      gsap.to(".work-digital .section__header-title-v12", {
                        scale: bp.scaleEnd,
                        x: bp.xEnd,
                        y: bp.yEnd,
                        scrollTrigger: {
                          trigger: workDigital,
                          start: "top center",
                          end: "bottom center",
                          scrub: true,
                        },
                      });
                    },
                  }
                );
              }
            };

            applyAnimation();
          };

          const initHorizontalSliderAnimation = (): void => {
            // Only run on specific pages to avoid conflicts
            const isMainPage = pathname === "/" || pathname.includes("/home");
            if (!isMainPage) {
              return;
            }
            const animateItems = (config: AnimateItemsConfig): void => {
              const {
                containerSelector,
                itemSelector,
                childCount,
                xOffset,
                opacity,
                duration,
                stagger,
                startTrigger,
                deviceWidthThreshold = 992,
              } = config;

              const container: HTMLElement | null =
                document?.querySelector(containerSelector);
              const items: NodeListOf<Element> = document?.querySelectorAll(
                `${itemSelector}:nth-child(-n+${childCount})`
              );

              if (!container || items.length === 0) {
                return;
              }

              if (deviceWidth > deviceWidthThreshold) {
                const animation = gsap?.from(items, {
                  x: xOffset,
                  opacity: opacity,
                  duration: duration,
                  stagger: stagger,
                  scrollTrigger: {
                    trigger: container,
                    start: startTrigger,
                    toggleActions: "play none none none",
                  },
                });

                // Track ScrollTrigger for cleanup
                if (animation && animation.scrollTrigger) {
                  scrollTriggers.push(animation.scrollTrigger as ScrollTrigger);
                }
              }
            };

            const setupScrollAnimation = (
              config: ScrollAnimationConfig
            ): void => {
              const {
                triggerSelector,
                itemsSelector,
                scrollDuration = 2.5,
                deviceWidthThreshold = 991,
                xPercentMultiplier = 100,
                snapMultiplier = 1,
                num = 2,
              } = config;

              const triggerElement: HTMLElement | null =
                document?.querySelector(triggerSelector);
              const items: HTMLElement[] = gsap.utils.toArray(itemsSelector);

              if (!triggerElement || items.length === 0) {
                return;
              }

              if (deviceWidth > deviceWidthThreshold) {
                const animation = gsap?.to(items, {
                  xPercent: -xPercentMultiplier * (items.length - num),
                  scrollTrigger: {
                    trigger: triggerElement,
                    pin: true,
                    start: "center center",
                    end: `+=${scrollDuration * 1000}`,
                    scrub: true,
                    snap: snapMultiplier / (items.length - 2),
                    markers: false,
                    onToggle: (self: ScrollTrigger): void => {
                      const parentElement: HTMLElement | null =
                        triggerElement.parentElement;
                      if (parentElement) {
                        if (self.isActive) {
                          parentElement.classList.add("pinned");
                        } else {
                          parentElement.classList.remove("pinned");
                        }
                      }
                    },
                  },
                });

                // Track ScrollTrigger for cleanup
                if (animation && animation.scrollTrigger) {
                  scrollTriggers.push(animation.scrollTrigger as ScrollTrigger);
                }
              }
            };

            const itemAnimations: AnimateItemsConfig[] = [
              {
                containerSelector: ".work-digital__items",
                itemSelector: ".work-digital__item",
                childCount: 3,
                xOffset: 200,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                startTrigger: "top center",
              },
              {
                containerSelector: ".service-sa__items",
                itemSelector: ".service-sa__item",
                childCount: 4,
                xOffset: 200,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                startTrigger: "top center",
              },
              {
                containerSelector: ".funfact__items",
                itemSelector: ".funfact__item",
                childCount: 4,
                xOffset: 200,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                startTrigger: "top center",
              },
            ];

            const scrollAnimations: ScrollAnimationConfig[] = [
              {
                triggerSelector: ".work-digital",
                itemsSelector: ".work-digital__item",
                scrollDuration: 3,
                deviceWidthThreshold: 991,
                num: 2,
              },
              {
                triggerSelector: ".service-sa__area",
                itemsSelector: ".service-sa__item",
                scrollDuration: 2.8,
                deviceWidthThreshold: 991,
                num: 4,
              },
              {
                triggerSelector: ".funfact__area",
                itemsSelector: ".funfact__item",
                scrollDuration: 2.8,
                deviceWidthThreshold: 991,
                num: 4,
              },
            ];

            itemAnimations?.forEach((config: AnimateItemsConfig) => {
              animateItems(config);
            });

            scrollAnimations?.forEach((config: ScrollAnimationConfig) => {
              setupScrollAnimation(config);
            });
          };

          const initPineVanishAnimation = (): void => {
            const pineVanishElements: HTMLElement[] =
              gsap?.utils?.toArray(".an-pine-vanish");

            if (pineVanishElements.length === 0) {
              return;
            }

            if (deviceWidth > 767) {
              pineVanishElements?.forEach((item: HTMLElement) => {
                const anim = gsap?.to(item, {
                  opacity: 0,
                  scale: 0.9,
                  y: 50,
                  scrollTrigger: {
                    trigger: item,
                    scrub: true,
                    start: "bottom bottom",
                    pin: true,
                    pinSpacing: false,
                    markers: false,
                  },
                });
                if (anim && anim.scrollTrigger) {
                  scrollTriggers.push(anim.scrollTrigger as ScrollTrigger);
                }
              });
            }
          };

          const initImageMovement = (): void => {
            // Only run on specific pages to avoid conflicts
            const isMainPage = pathname === "/" || pathname.includes("/home");
            if (!isMainPage) {
              return;
            }

            const imgMoveElements: NodeListOf<HTMLElement> =
              document.querySelectorAll(".img-move");

            if (imgMoveElements.length <= 0) {
              return;
            }

            if (imgMoveElements.length > 0) {
              imgMoveElements.forEach((element: HTMLElement) => {
                element.style.transition = "transform .12s linear";

                const handleMouseMove = (event: MouseEvent): void => {
                  const rect: DOMRect = element.getBoundingClientRect();
                  const mousex: number =
                    event.pageX - rect.left - window.scrollX;
                  const mousey: number =
                    event.pageY - rect.top - window.scrollY;

                  const imgx: number = (mousex - 300) / 30;
                  const imgy: number = (mousey - 200) / 30;

                  element.style.transform = `translate(${imgx}px, ${imgy}px) scale(1.1)`;
                };

                const handleMouseOut = (): void => {
                  element.style.transform = "translate(0px, 0px) scale(1)";
                };

                element.addEventListener("mousemove", handleMouseMove);
                element.addEventListener("mouseout", handleMouseOut);

                // Track cleanup
                eventCleanups.push(() => {
                  element.removeEventListener("mousemove", handleMouseMove);
                  element.removeEventListener("mouseout", handleMouseOut);
                  element.style.transform = "";
                  element.style.transition = "";
                });
              });
            }
          };

          const initTextRevealAnimation = (): void => {
            const textRevealSections: NodeListOf<Element> =
              document.querySelectorAll(".text-reveal-section");

            if (textRevealSections.length <= 0) {
              return;
            }

            textRevealSections.forEach((section: Element) => {
              const text: Element | null =
                section.querySelector(".text-reveal");

              if (text) {
                const split = new SplitText(text as Element, {
                  type: "chars",
                });

                const tl = gsap
                  .timeline({
                    scrollTrigger: {
                      trigger: section,
                      start: "top top",
                      end: "bottom",
                      pin: true,
                      scrub: 0.75,
                      markers: false,
                    },
                  })
                  .set(
                    split.chars,
                    {
                      color: "#0f0f0f",
                      stagger: 0.1,
                    },
                    0.1
                  );
                if (tl && tl.scrollTrigger) {
                  scrollTriggers.push(tl.scrollTrigger as ScrollTrigger);
                }
              }
            });
          };

          const initImageCursorAnimation = (): void => {
            const imgCursor: HTMLElement | null =
              document.querySelector(".img-cursor");

            if (!imgCursor) {
              return;
            }

            gsap.set(imgCursor, { yPercent: -50, xPercent: -50 });

            const targetElements: HTMLElement[] = gsap.utils.toArray(
              ".hero-fin__title, .work-digital__item-thumb"
            );

            targetElements.forEach((el: HTMLElement) => {
              const image: HTMLElement | null = el.querySelector(".img-cursor");

              if (!image) return;

              const setX = gsap.quickSetter(image, "x", "px");
              const setY = gsap.quickSetter(image, "y", "px");

              const align = (e: MouseEvent): void => {
                setX(e.clientX);
                setY(e.clientY);
              };

              const startFollow = (): void => {
                document.addEventListener("mousemove", align);
              };

              const stopFollow = (): void => {
                document.removeEventListener("mousemove", align);
              };

              const fade = gsap.to(image, {
                autoAlpha: 1,
                ease: "none",
                paused: true,
                onReverseComplete: stopFollow,
              });

              el.addEventListener("mouseenter", (e: MouseEvent): void => {
                fade.play();
                startFollow();
                align(e);
              });

              el.addEventListener("mouseleave", (): void => {
                fade.reverse();
              });
            });
          };

          ScrollTrigger.refresh();
          gsapFadeAnimations();
          gsapImageRevealAnimations();
          gsapHeaderStackingAnimation();
          gsapWorkPanelAnimation();
          gsapPortfolioPanelAnimation();
          gsapButtonParallaxAnimation();
          gsapTextRevealAnimation();
          gsapWordAnimation();
          gsapCharAnimation();
          initButtonParallaxEffect();
          initPinAnimation();
          initPinOnBottom();
          smoothScrollToAnchors();
          // new landing anim
          initHeroTitleAnimation();
          initButtonHoverAnimation();
          initFadeUpAnimation();
          initWorkDigitalAnimation();
          initResponsiveBreakpointAnimation();
          // TEMPORARILY DISABLED - Causes removeChild error on navigation
          // initHorizontalSliderAnimation();
          // initPineVanishAnimation();
          // initImageMovement();
          // initTextRevealAnimation();
          initImageCursorAnimation();
        };

        initGSAP();
      } catch (error) {
        console.warn("GSAP initialization failed:", error);
      }
    };

    const timeoutId = setTimeout(() => {
      initializeGSAP();
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      killAllAnimations();
    };
  }, [pathname, isClient]);

  // Use layoutEffect to kill animations synchronously before React unmounts
  useLayoutEffect(() => {
    // This runs before DOM mutations, ensuring cleanup happens before React removes nodes
    return () => {
      if (cleanupRef.current) {
        cleanupRef.current();
      }
    };
  }, [pathname]);
};

export default useGSAPAnimations;
