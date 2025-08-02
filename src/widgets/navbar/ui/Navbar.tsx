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

    // Функция для проверки, является ли ссылка активной
    const isActiveLink = (href: string) => {
        // Для главной страницы точное совпадение
        if (href === '/') {
            return pathname === '/';
        }

        // Для остальных путей проверяем, начинается ли текущий путь с href
        // Например: '/games' будет активным для '/games', '/games/1', '/games/anything'
        return pathname === href || pathname.startsWith(href + '/');
    };

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
            {navItems.map((item) => {
                const isActive = isActiveLink(item.href);

                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`${styles.link} ${isActive ? styles.active : ''}`}
                    >
                        <div className={`${styles.indicator} ${getIndicatorClass(item.href)}`} />
                        <svg className={`${styles.icon} ${isActive ? styles['icon--active'] : ''}`}>
                            <use href={item.icon} />
                        </svg>
                    </Link>
                );
            })}
        </nav>
    );
};
