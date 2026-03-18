"use client";
import Link from "next/link";
import Sidebar from "@/components/MarketingAgency/SideBar/SideBar";
import SearchModal from "@/components/MarketingAgency/common/SearchModal";
import { useState } from "react";
import useStickyHeader from "@/Hook/useStickyHeader";

// --- TYPE DEFINITIONS ---
interface MenuItem {
  title: string;
  href?: string;
  children?: MenuItem[];
}
interface HeaderData {
  logo: {
    src: string;
    alt: string;
    href: string;
  };
  nav: MenuItem[];
  cta: {
    href: string;
    label: string;
  };
}

// --- TYPED DATA OBJECT ---

const headerData: HeaderData = {
  logo: {
    src: "/assets/imgs/logo/logo-light.png",
    alt: "Site Logo",
    href: "/marketing-agency/",
  },
  nav: [
    {
      title: "Home",
      children: [
        { title: "Creative Agency", href: "/creative-agency" },
        { title: "Design Agency", href: "/design-agency" },
        { title: "Digital Agency", href: "/digital-agency" },
        { title: "AI Agency", href: "/ai-agency" },
        { title: "Marketing Agency", href: "/marketing-agency" },
        { title: "Digital Collective", href: "/digital-collective" },
        { title: "Marketing Agency V2", href: "/marketing-agency-v2" },
        { title: "Financial Advisor", href: "/financial-advisor" },
      ],
    },
    { title: "About Us", href: "/marketing-agency/about" },
    {
      title: "Service",
      children: [
        { title: "Services", href: "/marketing-agency/services" },
        { title: "Service Details", href: "/marketing-agency/service-details" },
      ],
    },
    {
      title: "Pages",
      children: [
        { title: "About Us", href: "/marketing-agency/about" },
        {
          title: "Service",
          children: [
            { title: "Services", href: "/marketing-agency/services" },
            {
              title: "Service Details",
              href: "/marketing-agency/service-details",
            },
          ],
        },
        {
          title: "Portfolio Pages",
          children: [
            { title: "Portfolio", href: "/marketing-agency/portfolio" },
            {
              title: "Portfolio Grid",
              href: "/marketing-agency/portfolio-grid",
            },
            {
              title: "Portfolio Slider",
              href: "/marketing-agency/portfolio-slider",
            },
            {
              title: "Portfolio Details",
              href: "/marketing-agency/portfolio-details",
            },
          ],
        },
        { title: "Team", href: "/marketing-agency/team" },
        {
          title: "Blog Pages",
          children: [
            { title: "Blog", href: "/marketing-agency/blog" },
            { title: "Blog Grid", href: "/marketing-agency/blog-grid" },
            { title: "Blog Details", href: "/marketing-agency/blog-details" },
          ],
        },
        { title: "FAQ", href: "/marketing-agency/faq" },
        { title: "Contact", href: "/marketing-agency/contact" },
      ],
    },
    {
      title: "Blog",
      children: [
        { title: "Blog", href: "/marketing-agency/blog" },
        { title: "Blog Grid", href: "/marketing-agency/blog-grid" },
        { title: "Blog Details", href: "/marketing-agency/blog-details" },
      ],
    },
    { title: "Contact", href: "/marketing-agency/contact" },
  ],
  cta: {
    href: "/marketing-agency/contact",
    label: "Let’s Connect",
  },
};
const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleSidebar = () => setIsOpen((prev) => !prev);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const closeModal = () => setIsOpenModal(false);
  const openModal = () => setIsOpenModal(true);
  useStickyHeader();

  // Recursive menu builder
  const renderMenu = (items: MenuItem[]): JSX.Element[] =>
    items.map((item, index) => (
      <li
        key={index}
        className={item?.children ? "menu-item-has-children" : ""}
      >
        <Link href={item?.href || "#0"}>{item?.title}</Link>
        {item?.children && (
          <ul className="dp-menu">{renderMenu(item?.children)}</ul>
        )}
      </li>
    ));

  return (
    <>
      <SearchModal isOpenModal={isOpenModal} closeModal={closeModal} />
      <Sidebar isOpen={isOpen} handleSidebar={handleSidebar} />
      <header className="header-area-5">
        <div className="header-main header-sticky">
          <div className="container large">
            <div className="header-area-5-inner">
              {/* Logo */}
              <div className="header-logo">
                <Link href={headerData?.logo?.href}>
                  <img
                    src={headerData?.logo?.src}
                    alt={headerData?.logo?.alt}
                    className="normal-logo"
                  />
                </Link>
              </div>

              {/* Navigation */}
              <div className="header-nav">
                <nav className="main-menu d-none d-xl-block">
                  <ul>{renderMenu(headerData?.nav)}</ul>
                </nav>
              </div>

              {/* Optional search icon */}
              <div className="search-icon" onClick={openModal}>
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>

              {/* CTA Buttons */}
              <div className="header-button">
                <div className="t-btn-group">
                  <Link
                    href={headerData?.cta?.href}
                    className="t-btn t-btn-circle"
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <Link
                    href={headerData?.cta?.href}
                    className="t-btn t-btn-primary"
                  >
                    {headerData?.cta?.label}
                  </Link>
                  <Link
                    href={headerData.cta.href}
                    className="t-btn t-btn-circle"
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>

              {/* Sidebar toggle */}
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

export default Header;
