"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HeaderData, MenuItem } from "@/constant/CreativeAgency/header";
import Sidebar from "@/components/CreativeAgency/SideBar/SideBar";
import useStickyHeader from "@/Hook/useStickyHeader";

const renderMenu = (items: MenuItem[]):JSX.Element => {
  return (
    <ul className="dp-menu">
      {items.map((item:MenuItem, index:number) => (
        <li
          key={index}
          className={item.children ? "menu-item-has-children" : ""}
        >
          {item.href ? (
            <Link href={item.href}>{item.label}</Link>
          ) : (
            <Link href="#0">{item.label}</Link>
          )}
          {item.children && renderMenu(item.children)}
        </li>
      ))}
    </ul>
  );
};

interface HeaderProps {
  data: HeaderData;
}
const Header: React.FC<HeaderProps> = ({ data: headerData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleSidebar = () => {
    setIsOpen((prev) => !prev);
  };
  useStickyHeader();

  return (
    <>
      <Sidebar isOpen={isOpen} handleSidebar={handleSidebar} />
      <header className="header-area-3">
        <div className="header-main header-sticky">
          <div className="container large">
            <div className="header-area-3-inner">
              {/* Logo */}
              <div className="header-logo">
                <Link href="/creative-agency">
                  <img
                    src={headerData?.logo}
                    className="normal-logo"
                    alt="Site Logo"
                  />
                </Link>
              </div>

              {/* Navigation */}
              <div className="header-nav">
                <nav className="main-menu d-none d-xl-block">
                  <ul>
                    {headerData?.menu?.map((item:MenuItem, index: number) => (
                      <li
                        key={index}
                        className={
                          item?.children ? "menu-item-has-children" : ""
                        }
                      >
                        {item?.href ? (
                          <Link href={item?.href}>{item?.label}</Link>
                        ) : (
                          <Link href="#0">{item?.label}</Link>
                        )}
                        {item?.children && renderMenu(item?.children)}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* Offcanvas */}
              <div className="header-offcanvas">
                <button className="side-toggle" onClick={handleSidebar}>
                  <img src={headerData?.offcanvasIcon} alt="offcanvas toggle" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
