// src/widgets/games/ui/GamesList.tsx
import React from 'react';
import { Game } from '@/entities/game';
import { getAllGames } from '@/entities/game/api/game.api';
import { GameCard } from './GameCard';
import styles from './GamesList.module.scss';

// 1. Объявите пропсы
export interface GamesListProps {
    mode: 'Онлайн' | 'Оффлайн'; // mode обязательный
    className?: string;
}

// 2. Компонент GamesList
export const GamesList: React.FC<GamesListProps> = async ({ mode, className }) => {
    // Для отладки
    console.log(`GamesList рендерится для режима: ${mode}`);

    let games: Game[] = [];
    try {
        games = await getAllGames();
    } catch (error) {
        console.error('Ошибка при загрузке списка игр:', error);
        return <div className={styles.error}>Не удалось загрузить список игр.</div>;
    }

    if (games.length === 0) {
        return <div className={styles.empty}>Игры не найдены.</div>;
    }

    return (
        <div className={`${styles.gamesList} ${className || ''}`}>
            {games.map((game) => (
                <GameCard key={game.id} game={game} className={styles.gameCard} />
            ))}
        </div>
    );
};
