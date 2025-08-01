// src/widgets/games/ui/GameCard.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Game } from '@/entities/game';
import { Plate } from '@/shared/ui/plate';
import styles from './GameCard.module.scss';

// 1. Объявите пропсы (mode убран)
export interface GameCardProps {
    game: Game;
    className?: string;
}

// 2. Компонент GameCard (mode убран из параметров)
export const GameCard: React.FC<GameCardProps> = ({ game, className }) => {
    // Формируем простую ссылку на страницу игры
    const gameHref = `/games/${game.id}`;

    return (
        <Link href={gameHref} className={`${styles.link} ${className || ''}`}>
            <Plate className={styles.plate}>
                {game.image && (
                    <Image
                        src={game.image}
                        alt={game.name}
                        width={100}
                        height={100}
                        className={styles.image}
                    />
                )}
                <span className={styles.label}>{game.name}</span>
            </Plate>
        </Link>
    );
};
