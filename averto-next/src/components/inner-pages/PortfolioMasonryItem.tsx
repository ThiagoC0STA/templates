"use client";
import Image from "next/image";
import Link from "next/link";
import ArrowMasonryIcon from "@/icons/ArrowMasonryIcon";
import { PortfolioMasonryItem as PortfolioMasonryItemType } from "@/types/inner-pages/portfolio-masonry";
import useBaseURL from "@/Hook/useBaseURL";

interface PortfolioMasonryItemProps {
  item: PortfolioMasonryItemType;
}

const PortfolioMasonryItem = ({ item }: PortfolioMasonryItemProps) => {
  const baseUrl = useBaseURL();
  return (
    <div className="col-12 fade_up_anim" data-delay={item.delay}>
      <div className="work-sa__item">
        <Link href={baseUrl + item.href} className="work-sa__item-figure">
          <Image src={item.image} alt="work" />
        </Link>
        <div className="work-sa__item-body">
          <div className="work-sa__item-content">
            <h6 className="h6">
              <Link href={baseUrl + item.href}>{item.title}</Link>
            </h6>
            <p>{item.categories}</p>
          </div>
          <Link href={baseUrl + item.href} className="arrow" aria-label="Open work details">
            <ArrowMasonryIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioMasonryItem;
