"use client";
import Link from "next/link";
import { BlogSidebarCategory } from "@/types/common/blog-sidebar";
import useBaseURL from "@/Hook/useBaseURL";

interface CategoriesWidgetProps {
  title: string;
  categories: BlogSidebarCategory[];
}

const CategoriesWidget = ({ title, categories }: CategoriesWidgetProps) => {
  const baseUrl = useBaseURL();
  return (
    <div className="widget__item widget__categories">
      <h4 className="widget__title">{title}</h4>
      <ul className="custom-ul categorie-list">
        {categories.map((category) => (
          <li key={category.id}>
            <Link href={baseUrl + category.href} className="categorie">
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesWidget;
