"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Offcanvas from "react-bootstrap/Offcanvas";
import NestedAccordion from "@/components/common/NestedAccordion";
import useBaseURL from "@/Hook/useBaseURL";
import type { SidebarData } from "@/types/common/sidebar";

interface SidebarProps {
  isOpen: boolean;
  handleSidebar: () => void;
  menuClass?: string;
  sidebarData: SidebarData;
}

const Sidebar = ({
  isOpen,
  handleSidebar,
  menuClass = "d-xl-none",
  sidebarData,
}: SidebarProps) => {
  // const pathname = usePathname();
  const placement = "end";

  // const getLogoHref = () => {
  //   const currentSegment = pathname.split("/")[1];
  //   const hasValidRoute = defaultSidebarData.menus[0].items?.some(
  //     (item) => item.href === `/${currentSegment}`
  //   );

  //   return hasValidRoute ? `/${currentSegment}` : "/";
  // };

  const baseURL = useBaseURL();

  return (
    <Offcanvas
      show={isOpen}
      onHide={handleSidebar}
      placement={placement}
      className="side-panel"
    >
      <Offcanvas.Header className="sidebar-header">
        <div className="offset-logo">
          <Link href={baseURL}>
            <Image
              src={sidebarData.logo.image}
              alt={sidebarData.logo.alt}
              priority
            />
          </Link>
        </div>
        <button
          type="button"
          className="side-panel__closer"
          onClick={handleSidebar}
          aria-label="Close"
        >
          <i className={sidebarData.closeIcon}></i>
        </button>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div className={`mobile-menu-new fix ${menuClass}`}>
          <NestedAccordion
            items={sidebarData.menus}
            directNavItems={sidebarData.directNavItems}
          />
        </div>

        <div className="side-panel__content">
          <p>{sidebarData.sidePanel.description}</p>

          <ul className="custom-ul side-panel__contact">
            {sidebarData.sidePanel.contacts.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <li key={index}>
                  <div className="contact-thumb">
                    <IconComponent />
                  </div>
                  <div className="contact-content">
                    <p>{contact.title}</p>
                    {contact.href ? (
                      <a href={contact.href}>{contact.value}</a>
                    ) : (
                      <span>{contact.value}</span>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>

          <p className="side-panel__copyright">
            <span>{sidebarData.sidePanel.copyright.brand}</span>
            {sidebarData.sidePanel.copyright.text}
          </p>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Sidebar;
