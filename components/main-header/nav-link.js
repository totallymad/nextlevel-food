"use client";
// отдельные маленькие компоненты с логикой на уровне браузера лучше выносить в отдельные NOTE

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./nav-link.module.css";

export default function NavLink({ href, children }) {
  // получаем путь в строке браузера
  const path = usePathname();

  return (
    <Link
      href={href}
      className={
        // если путь начинается с meals то добавляем класс активности
        path.startsWith(href) ? `${styles.link} ${styles.active}` : styles.link
      }
    >
      {children}
    </Link>
  );
}
