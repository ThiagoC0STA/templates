import Link from "next/link";
import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { FiPlus, FiMinus } from "react-icons/fi";


interface AccordionItemData {
  label: string;
  href?: string;
  children?: AccordionItemData[];
}


interface NestedAccordionProps {
  items: AccordionItemData[];
  parentKey?: string;
}

  const NestedAccordion: React.FC<NestedAccordionProps> = ({ items, parentKey = "" }) => {

    const [activeKey, setActiveKey] = useState<string | null>(null);

    const handleToggle = (key: string): void => {
      setActiveKey(activeKey === key ? null : key);
    };

  return (
    <Accordion activeKey={activeKey ?? undefined}>
      {items.map((item, index) => {
        const eventKey = `${parentKey}-${index}`;
        const hasChildren = item.children && item.children.length > 0;

        return hasChildren ? (
          <Accordion.Item eventKey={eventKey} key={eventKey}>
            <Accordion.Header onClick={() => handleToggle(eventKey)}>
              {item.label}
              <span className="ms-2">
                {activeKey === eventKey ? <FiMinus /> : <FiPlus />}
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <NestedAccordion items={item.children ?? []} parentKey={eventKey} />
            </Accordion.Body>
          </Accordion.Item>
        ) : (
          <div key={eventKey} className="accordion-item">
            <h2 className="accordion-header">
              <div className="accordion-button">
                <div className="accordion-link w-100">
                  <Link href={item.href || "#"} className="d-block w-100">{item.label}</Link>
                </div>
              </div>
            </h2>
          </div>
        );
      })}
    </Accordion>
  );
};

export default NestedAccordion;
