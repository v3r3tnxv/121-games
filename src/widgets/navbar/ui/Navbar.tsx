"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.scss";

export const Navbar = () => {
    const pathname = usePathname();

    return (
        <nav className={styles.navbar}>
            <Link href="/dailies" className={styles.navbar__link}>
                <svg className={`${styles.navbar__icon} ${pathname === "/dailies" ? styles["navbar__icon--active"] : ""}`}>
                    <use href="/icons/chest.svg#icon-chest" />
                </svg>
            </Link>
            <Link href="/games" className={styles.navbar__link}>
                <svg className={`${styles.navbar__icon} ${pathname === "/games" ? styles["navbar__icon--active"] : ""}`}>
                    <use href="/icons/gamepad.svg#icon-gamepad" />
                </svg>
            </Link>
            <Link href="/leaderboard" className={styles.navbar__link}>
                <svg className={`${styles.navbar__icon} ${pathname === "/leaderboard" ? styles["navbar__icon--active"] : ""}`}>
                    <use href="/icons/ranking-podium.svg#icon-ranking-podium" />
                </svg>
            </Link>
            <Link href="/profile" className={styles.navbar__link}>
                <svg className={`${styles.navbar__icon} ${pathname === "/profile" ? styles["navbar__icon--active"] : ""}`}>
                    <use href="/icons/profile.svg#icon-profile" />
                </svg>
            </Link>
        </nav>
    );
};
