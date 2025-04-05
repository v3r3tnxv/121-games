"use client";

import "./Navbar.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
    const pathname = usePathname();

    return (
        <nav className="navbar">
            <Link href="/dailies" className={`navbar__link`}>
                <svg className={`navbar__icon ${pathname === "/dailies" ? "navbar__icon--active" : ""}`}>
                    <use href="/icons/chest.svg#icon-chest" />
                </svg>
            </Link>
            <Link href="/games" className={`navbar__link`}>
                <svg className={`navbar__icon ${pathname === "/games" ? "navbar__icon--active" : ""}`}>
                    <use href="/icons/gamepad.svg#icon-gamepad" />
                </svg>
            </Link>
            <Link href="/leaderboard" className={`navbar__link`}>
                <svg className={`navbar__icon ${pathname === "/leaderboard" ? "navbar__icon--active" : ""}`}>
                    <use href="/icons/ranking-podium.svg#icon-ranking-podium" />
                </svg>
            </Link>
            <Link href="/profile" className={`navbar__link`}>
                <svg className={`navbar__icon ${pathname === "/profile" ? "navbar__icon--active" : ""}`}>
                    <use href="/icons/profile.svg#icon-profile" />
                </svg>
            </Link>
        </nav>
    );
};
