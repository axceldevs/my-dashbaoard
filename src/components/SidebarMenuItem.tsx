'use client';
 
import { usePathname } from "next/navigation";
import style from "./ActiveLink.module.css";
import Link from "next/link";

interface Props {
    path: string;
    icon: JSX.Element;
    title: string;
    subTitle: string;
}

export const SidebarMenuItem = ({ path, icon, title, subTitle }: Props) => {

  const pathname = usePathname();

  return (
    <Link
      href={path}
      className={`${style.link} ${pathname === path ? style.activeLink : ""}`}
    >
      <div>
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5">
          {title}
        </span>
        <span className="text-sm hidden md:block">
          {subTitle}
        </span>
      </div>
    </Link>
  );
};
