import Link from "next/link";
import {FooterData, IFooterLink} from "@/constant/DigitalAgency/footer";

interface FooterSectionProps {
  data: FooterData;
}

const FooterSection: React.FC<FooterSectionProps> = ({ data: footerData }) => {
  return (
    <footer className="footer-area">
      <div className="area-bg">
        <img src={footerData?.backgroundImage} alt="footer background" />
      </div>

      <div className="container">
        <div className="footer-widget-wrapper-box">
          <div className="footer-widget-wrapper">
            {/* Newsletter Section */}
            <div className="footer-widget-box newsletter">
              <div className="subscription-box">
                <div className="title-wrapper">
                  <h2 className="section-title">{footerData?.newsletter?.title}</h2>
                </div>
                <div className="text-wrapper">
                  <p className="text">{footerData?.newsletter?.subtitle}</p>
                </div>
                <div className="subscribe-form">
                  <div className="input-field">
                    <input
                      type="email"
                      placeholder={footerData?.newsletter?.placeholder}
                    />
                    <button
                      type="submit"
                      className="subscribe-btn t-btn-primary bg-active"
                    >
                      {footerData?.newsletter?.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div className="footer-widget-box">
              <h2 className="title">Company</h2>
              <ul className="footer-nav-list">
                {footerData?.companyLinks?.map((link:IFooterLink, idx:number) => (
                  <li key={idx}>
                    <Link href={link?.href || "#"}>{link?.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions Links */}
            <div className="footer-widget-box">
              <h2 className="title">Solutions</h2>
              <ul className="footer-nav-list">
                {footerData?.solutionsLinks?.map((link:IFooterLink, idx:number) => (
                  <li key={idx}>
                    <Link href={link?.href || "#"}>{link?.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Instagram Images */}
            <div className="footer-widget-box">
              <h2 className="title">Instagram</h2>
              <div className="instagram-posts">
                {footerData?.instagramImages?.map((src:string, idx:number) => (
                  <Link href="#" key={idx}>
                    <img src={src} alt={`Instagram ${idx + 1}`} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="copyright-area">
        <div className="container">
          <div className="copyright-area-inner">
            <div className="footer-logo">
              <Link href="/digital-agency/">
                <img src={footerData?.logo} alt="site logo" />
              </Link>
            </div>
            <div className="copyright-text">
              <p className="text">
                Copyright © {footerData?.copyright?.year}{" "}
                <Link href={footerData?.copyright?.link}>
                  {footerData?.copyright?.text}
                </Link>
                . All rights reserved.
              </p>
            </div>
            <div className="social-links">
              {footerData?.socialLinks?.map((link:IFooterLink, idx:number) => (
                <Link href={link?.href || "#"} key={idx}>
                  {link?.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
