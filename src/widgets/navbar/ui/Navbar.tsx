'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.scss';

export const Navbar = () => {
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    // Определяем тип индикатора для каждой ссылки
    const getIndicatorClass = (href: string) => {
        if (href === '/dailies') {
            return styles['indicator--first'];
        } else if (href === '/games' || href === '/leaderboard') {
            return styles['indicator--middle'];
        } else if (href === '/profile') {
            return styles['indicator--last'];
        }
        return '';
    };

    const navItems = [
        { href: '/dailies', icon: '/icons/chest.svg#icon-chest' },
        { href: '/games', icon: '/icons/gamepad.svg#icon-gamepad' },
        { href: '/leaderboard', icon: '/icons/ranking-podium.svg#icon-ranking-podium' },
        { href: '/profile', icon: '/icons/profile.svg#icon-profile' },
    ];

    return (
        <nav className={styles.navbar}>
            {navItems.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className={`${styles.link} ${pathname === item.href ? styles.active : ''}`}
                >
                    <div className={`${styles.indicator} ${getIndicatorClass(item.href)}`} />
                    <svg
                        className={`${styles.icon} ${pathname === item.href ? styles['icon--active'] : ''}`}
                    >
                        <use href={item.icon} />
                    </svg>
                </Link>
            ))}
        </nav>
    );
};
