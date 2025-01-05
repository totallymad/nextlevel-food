import Link from "next/link";
import Image from "next/image";

import logoImg from "@/assets/logo.png";

import styles from "./main-header.module.css";
import MainHeaderBackground from "./main-header-bg";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link className={styles.logo} href="/">
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Обзор блюд</NavLink>
            </li>
            <li>
              <NavLink href="/community">Сообщество гурманов</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
