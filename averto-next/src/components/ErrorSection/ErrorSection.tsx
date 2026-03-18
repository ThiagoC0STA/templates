import Link from "next/link";
import React from "react";

const ErrorSection: React.FC = () => {
  return (
    <div className="error-section min-vh-100 display-grid">
      <div className="container h-100">
        <div className="error-area-inner d-flex justify-content-center align-items-center h-100">
          <div className="error-content text-center">
            <div className="image-wrapper">
              <img src="/assets/imgs/404-animate.svg" alt="" />
            </div>
            <h2 className="mt-n3">Page Not Found</h2>
            <p className="mt-3">
              Sorry, the page you are looking for does not exist.
            </p>
            <div className="t-btn-group mt-4">
              <Link className="t-btn t-btn-circle" href="/">
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
              <Link className="t-btn t-btn-primary" href="/">
                Go Back Home
              </Link>
              <Link className="t-btn t-btn-circle" href="/">
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorSection;
