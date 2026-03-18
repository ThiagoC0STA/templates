import Link from "next/link";
import {FooterData, IFooterLink, IFooterSocial} from "@/constant/DesignAgency/footer";
interface FooterSectionProps {
    data: FooterData;
}
const FooterSection: React.FC<FooterSectionProps> = ({data:footerData}) => {
  return (
    <footer className="footer-area-2">
      {/* CTA Section */}
      <div className="cta-area fade-anim" suppressHydrationWarning={true}>
        <div className="container">
          <div className="cta-area-inner">
            <div className="section-header">
              <div className="section-title-wrapper fade-anim" suppressHydrationWarning={true}>
                <div className="subtitle-wrapper">
                  <span className="section-subtitle light">
                    {footerData?.cta?.subtitle}
                  </span>
                </div>
                <div className="title-wrapper">
                  <h2 className="section-title">{footerData?.cta?.title}</h2>
                </div>
              </div>
              <div className="btn-wrapper fade-anim" suppressHydrationWarning={true}>
                <div className="t-btn-group">
                  <Link
                    className="t-btn t-btn-circle"
                    href={footerData?.cta?.href || "/"}
                  >
                    <i className={footerData?.cta?.icon}></i>
                  </Link>
                  <Link
                    className="t-btn t-btn-primary"
                    href={footerData?.cta?.href || "/"}
                  >
                    {footerData?.cta?.btnText}
                  </Link>
                  <Link
                    className="t-btn t-btn-circle"
                    href={footerData?.cta?.href || "/"}
                  >
                    <i className={footerData?.cta?.icon}></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container">
        <div className="footer-widget-wrapper-box">
          <div className="footer-widget-wrapper">
            {/* Logo & Info */}
            <div className="footer-widget-box">
              <div className="info-box">
                <div className="footer-logo">
                  <Link href="/">
                    <img src={footerData?.logo} alt="site logo" />
                  </Link>
                </div>
                <div className="text-wrapper">
                  <p className="text">{footerData?.description}</p>
                </div>
                <div className="social-links">
                  {footerData?.social?.map((item:IFooterSocial, i:number) => (
                    <a key={i} href={item?.href}>
                      <i className={item?.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Widgets */}
            {footerData?.widgets?.map((widget, index) => (
              <div className="footer-widget-box" key={index}>
                <h2 className="title">{widget?.title}</h2>

                {/* Navigation Links */}
                {widget?.links && (
                  <ul className="footer-nav-list">
                    {widget?.links?.map((link:IFooterLink, i:number) => (
                      <li key={i}>
                        <Link href={link?.href || "#"}>{link?.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Contact Info */}
                {widget?.contacts && (
                  <ul className="footer-nav-list contact">
                    <li>
                      <span className="nav-title">
                        {widget?.contacts?.phone?.label}
                      </span>
                      <a href={widget?.contacts?.phone?.href}>
                        {widget?.contacts?.phone?.text}
                      </a>
                    </li>
                    <li>
                      <span className="nav-title">
                        {widget?.contacts?.address?.label}
                      </span>
                      {widget?.contacts?.address?.lines?.map((line, i:number) => (
                        <div key={i}>{line}</div>
                      ))}
                    </li>
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="copyright-area">
        <div className="container">
          <div className="copyright-area-inner">
            <div className="copyright-text">
              <p className="text">
                Copyright © {footerData?.copyright?.year}{" "}
                <a href="#">{footerData?.copyright?.company}</a>. All rights
                reserved.
              </p>
            </div>
            <ul className="copyright-nav-list">
              <li>
                <Link href={footerData?.copyright?.terms?.href || "#"}>
                  {footerData?.copyright?.terms?.label}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
