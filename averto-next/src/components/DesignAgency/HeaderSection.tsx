"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HeaderData,MenuData } from "@/constant/DesignAgency/header";
import Sidebar from "@/components/DesignAgency/SideBar/SideBar";
import useStickyHeader from "@/Hook/useStickyHeader";

const renderMenu = (items:MenuData[]) => {
  return (
    <ul className="dp-menu">
      {items?.map((item:MenuData, index:number) => (
        <li
          key={index}
          className={item?.children ? "menu-item-has-children" : ""}
        >
          {item?.href ? (
            <Link href={item?.href || "#"}>{item?.label}</Link>
          ) : (
            <Link href="#">{item?.label}</Link>
          )}
          {item?.children && renderMenu(item?.children)}
        </li>
      ))}
    </ul>
  );
};


interface HeaderProps {
  data:HeaderData;
}

const HeaderSection:React.FC<HeaderProps> = ({data:headerData}) => {
  const [isOpen, setIsOpen] = useState(false);
  useStickyHeader();

  const handleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} handleSidebar={handleSidebar} />
      <header className="header-area-2">
        <div className="header-main header-sticky">
          <div className="container large">
            <div className="header-area-2-inner">
              {/* Logo */}
              <div className="header-logo">
                <Link href="/design-agency">
                  <img
                    src={headerData?.logo}
                    className="normal-logo"
                    alt="Site Logo"
                  />
                </Link>
              </div>

              {/* Navigation */}
              <div className="header-nav pos-center">
                <nav className="main-menu d-none d-xl-block">
                  <ul>
                    {headerData?.menu?.map((item:MenuData, index:number) => (
                      <li
                        key={index}
                        className={
                          item?.children ? "menu-item-has-children" : ""
                        }
                      >
                        {item?.href ? (
                          <Link href={item?.href}>{item?.label}</Link>
                        ) : (
                          <Link href="#">{item?.label}</Link>
                        )}
                        {item?.children && renderMenu(item?.children)}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* Buttons */}
              <div className="header-button">
                <div className="t-btn-group">
                  <Link className="t-btn t-btn-circle" href="/design-agency/contact">
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <Link className="t-btn t-btn-primary" href="/design-agency/contact">
                    Let’s Connect
                  </Link>
                  <Link className="t-btn t-btn-circle" href="/design-agency/contact">
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>

              {/* Offcanvas */}
              <div className="header-offcanvas d-xl-none">
                <button className="side-toggle" onClick={handleSidebar}>
                  <i className="fa-solid fa-bars"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderSection;
