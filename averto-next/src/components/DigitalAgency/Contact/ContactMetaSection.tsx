import Link from "next/link";
import React from "react";

const ContactMetaSection:React.FC = () => {
  return (
    <div className="contact-meta-area">
      <div className="container">
        <div className="contact-meta-area-inner section-spacing">
          <div className="meta-wrapper-box move-anim">
            <div className="meta-wrapper">
              <div className="contact-meta-box">
                <div className="thumb">
                  <img src="/assets/imgs/icon/icon-22.webp" alt="image" />
                </div>
                <div className="content">
                  <h3 className="title">Email Us</h3>
                  <div className="meta-list">
                    <ul>
                      <li>
                        <Link href="mailto:info@averto.com">info@averto.com</Link>
                      </li>
                      <li>
                        <Link href="mailto:example@avertogmail.com">
                          example@avertogmail.com
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="contact-meta-box active">
                <div className="thumb">
                  <img src="/assets/imgs/icon/icon-23.webp" alt="image" />
                </div>
                <div className="content">
                  <h3 className="title">Phone Us</h3>
                  <div className="meta-list">
                    <ul>
                      <li>
                        <Link href="tel:+12446654852">+1244-665-4852</Link>
                      </li>
                      <li>
                        <Link href="tel:+12555656856">+1255-565-6856</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="contact-meta-box">
                <div className="thumb">
                  <img src="/assets/imgs/icon/icon-24.webp" alt="image" />
                </div>
                <div className="content">
                  <h3 className="title">Visit Us</h3>
                  <div className="meta-list">
                    <ul>
                      <li>
                        410 Sandtown, California <br /> 56044, USA
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMetaSection;
