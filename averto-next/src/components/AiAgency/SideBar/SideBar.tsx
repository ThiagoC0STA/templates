"use client";

import React from "react";
import Link from "next/link";
import sidebarData from "@/constant/AiAgency/sidebar/sidebarData";
import NestedAccordion from "@/components/AiAgency/common/NestedAccordion";

interface SideBarProps {
  isOpen: boolean;
  handleSidebar: () => void;
  menuClass?: string;
}

const Sidebar = ({
  isOpen,
  handleSidebar,
  menuClass = "d-xl-none",
}: SideBarProps) => {
  return (
    <>
      <aside className="fix">
        <div className={`side-info ${isOpen ? "info-open" : ""}`}>
          <div className="side-info-content">
            {/* Header */}
            <div className="offset-widget offset-header">
              <div className="offset-logo">
                <Link href="/ai-agency/">
                  <img src={sidebarData.logo} alt="site logo" />
                </Link>
              </div>
              <button
                id="side-info-close"
                className="side-info-close"
                onClick={handleSidebar}
              >
                <i className={sidebarData.closeIcon}></i>
              </button>
            </div>

            {/* Mobile menu container (if needed for JS menu toggle logic) */}
            <div className={`mobile-menu fix ${menuClass}`}>
              <NestedAccordion items={sidebarData.menus} />
            </div>

            {/* Info Box */}
            <div className="offset-info-box">
              <h2 className="title">{sidebarData?.title}</h2>
              <p className="text">{sidebarData?.description}</p>
              <div className="t-btn-group">
                <Link
                  className="t-btn t-btn-circle"
                  href={sidebarData?.cta?.href}
                >
                  <i className={sidebarData?.ctaIcon}></i>
                </Link>
                <Link
                  className="t-btn t-btn-primary"
                  href={sidebarData?.cta?.href}
                >
                  {sidebarData?.cta?.text}
                </Link>
                <Link
                  className="t-btn t-btn-circle"
                  href={sidebarData?.cta?.href}
                >
                  <i className={sidebarData?.ctaIcon}></i>
                </Link>
              </div>

              {/* Gallery */}
              <div className="post-image">
                {sidebarData?.gallery?.map((img, i) => (
                  <img key={i} src={img} alt={`gallery-${i}`} />
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="offset-widget-box">
              <h2 className="title">Information</h2>
              <div className="contact-meta">
                <div className="contact-item">
                  <span className="text">
                    <Link href={sidebarData?.contact?.phone?.href}>
                      {sidebarData?.contact?.phone?.text}
                    </Link>
                  </span>
                </div>
                <div className="contact-item">
                  <span className="text">
                    <a href={sidebarData?.contact?.email?.href}>
                      {sidebarData?.contact?.email?.text}
                    </a>
                  </span>
                </div>
                <div className="contact-item">
                  <span className="text">{sidebarData?.contact?.address}</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="offset-widget-box">
              <h2 className="title">Connect Us On</h2>
              <div className="social-links">
                {sidebarData.social.map((social, i) => (
                  <a key={i} href={social.href}>
                    {social.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Logo */}
            <div className="offset-logo-footer">
              <img src={sidebarData.footerLogo} alt="footer logo" />
            </div>
          </div>
        </div>
      </aside>

      {/* Overlay */}
      <div
        className={`offcanvas-overlay ${isOpen ? "overlay-open" : ""}`}
        onClick={handleSidebar}
      ></div>
    </>
  );
};

export default Sidebar;
