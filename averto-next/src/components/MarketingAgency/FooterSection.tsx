import Link from "next/link";
import {IFooterData, IFooterLink, IFooterSocial} from "@/constant/MarketingAgency/footer";

interface FooterProps {
  data: IFooterData;
}
const FooterSection:React.FC<FooterProps> = ({data:footerData}) => {
  return (
    <footer className="footer-area-2">
      <div className="area-bg">
        <img src={footerData?.backgroundImage} alt="image" />
      </div>

      <div className="cta-area fade-anim" suppressHydrationWarning={true}>
        <div className="container">
          <div className="cta-area-inner">
            <div className="section-header">
              <div className="section-title-wrapper fade-anim" suppressHydrationWarning={true}>
                <div className="subtitle-wrapper">
                  <span className="section-subtitle">{footerData?.cta?.subtitle}</span>
                </div>
                <div className="title-wrapper">
                  <h2 className="section-title">{footerData?.cta?.title}</h2>
                </div>
              </div>
              <div className="btn-wrapper fade-anim" suppressHydrationWarning={true}>
                <div className="t-btn-group">
                  <Link className="t-btn t-btn-circle" href={footerData?.cta?.url || "#"}>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <Link className="t-btn t-btn-primary" href={footerData?.cta?.url || "#"}>
                    {footerData?.cta?.buttonText}
                  </Link>
                  <Link className="t-btn t-btn-circle" href={footerData?.cta?.url || "#"}>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="footer-widget-wrapper-box">
          <div className="footer-widget-wrapper">

            {/* Logo + description + socials */}
            <div className="footer-widget-box">
              <div className="info-box">
                <div className="footer-logo">
                  <Link href={footerData?.logo?.url || "/"}>
                    <img src={footerData?.logo?.src} alt="site logo" />
                  </Link>
                </div>
                <div className="text-wrapper">
                  <p className="text">{footerData?.description}</p>
                </div>
                <div className="social-links">
                  {footerData?.socials?.map((social:IFooterSocial, idx:number) => (
                    <Link key={idx} target="_blank" href={social?.url || "#"}>
                      <i className={social?.icon}></i>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div className="footer-widget-box">
              <h2 className="title">{footerData?.company?.title}</h2>
              <ul className="footer-nav-list">
                {footerData?.company?.links?.map((link:IFooterLink, idx:number) => (
                  <li key={idx}>
                    <Link href={link?.url || "#"}>{link?.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Useful Links */}
            <div className="footer-widget-box">
              <h2 className="title">{footerData?.useful?.title}</h2>
              <ul className="footer-nav-list">
                {footerData?.useful?.links?.map((link:IFooterLink, idx:number) => (
                  <li key={idx}>
                    <Link href={link?.url || "#"}>{link?.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-widget-box">
              <h2 className="title">{footerData?.contact?.title}</h2>
              <ul className="footer-nav-list contact">
                <li>
                  <span className="nav-title">Call Us</span>
                  <Link href={`tel:${footerData?.contact?.phone?.replace(/\s/g, "")}`}>
                    {footerData?.contact?.phone}
                  </Link>
                </li>
                <li>
                  <span className="nav-title">Location</span>
                  {footerData?.contact?.address?.split("\n").map((line, idx) => (
                    <div key={idx}>{line}</div>
                  ))}
                </li>
              </ul>
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
                <Link href={footerData?.copyright?.url || "#"}>
                  {footerData?.copyright?.author}
                </Link>. All rights reserved.
              </p>
            </div>
            <ul className="copyright-nav-list">
              {footerData?.copyright?.links?.map((item:IFooterLink, idx:number) => (
                <li key={idx}>
                  <Link href={item?.url || "#"}>{item?.label}</Link>
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
