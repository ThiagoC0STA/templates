import Link from "next/link";
import {FooterData, FooterLink, SocialLink} from "@/constant/AiAgency/footer";

interface FooterSectionProps {
  data: FooterData;
}

const FooterSection: React.FC<FooterSectionProps> = ({ data: footerData }) => {
  return (
    <footer className="footer-area-4">
      <div className="area-bg">
        <img src={footerData?.bgImage} alt="image" />
      </div>

      <div className="cta-area-3 fade-anim" suppressHydrationWarning={true}>
        <div className="container">
          <div className="cta-area-3-inner section-spacing-top" suppressHydrationWarning={true}>
            <div className="section-header" suppressHydrationWarning={true}>
              <div className="section-title-wrapper" suppressHydrationWarning={true}>
                <div className="title-wrapper" suppressHydrationWarning={true}>
                  <h2
                    className="section-title"
                    dangerouslySetInnerHTML={{
                      __html: footerData?.cta?.title || "",
                    }}
                  ></h2>
                </div>
              </div>

              <div className="btn-wrapper">
                <div className="t-btn-group">
                  <Link
                    className="t-btn t-btn-circle"
                    href={footerData?.cta?.buttonLink || "#"}
                  >
                    <i className={footerData?.cta?.iconClass}></i>
                  </Link>
                  <Link
                    className="t-btn t-btn-primary"
                    href={footerData?.cta?.buttonLink || "#"}
                  >
                    {footerData?.cta?.buttonText}
                  </Link>
                  <Link
                    className="t-btn t-btn-circle"
                    href={footerData?.cta?.buttonLink || "#"}
                  >
                    <i className={footerData?.cta?.iconClass}></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-widget-wrapper-box">
        <div className="container">
          <div className="footer-widget-wrapper">
            <div className="footer-widget-box">
              <div className="info-box">
                <div className="footer-logo">
                  <Link href={footerData?.logoLink || "/ai-agency"}>
                    <img src={footerData?.logo} alt="site logo" />
                  </Link>
                </div>

                <ul className="footer-nav-list">
                  {footerData?.navLinks?.map((link:FooterLink, index:number) => (
                    <li key={index}>
                      <Link href={link?.href || "#"}>{link?.label}</Link>
                    </li>
                  ))}
                </ul>

                <div className="social-links">
                  {footerData?.socialLinks?.map((social:SocialLink, index:number) => (
                    <Link key={index} href={social?.href || "#"}>
                      <i className={social?.icon}></i>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright-area">
        <div className="container">
          <div className="copyright-area-inner">
            <div className="copyright-text">
              <p className="text">
                {footerData?.copyright?.text}{" "}
                <Link href={footerData?.copyright?.linkHref || "#"}>
                  {footerData?.copyright?.linkText}
                </Link>
              </p>
            </div>

            <ul className="copyright-nav-list">
              {footerData?.copyright?.navItems?.map((item:FooterLink, index:number) => (
                <li key={index}>
                  <Link href={item?.href || "#"}>{item?.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
