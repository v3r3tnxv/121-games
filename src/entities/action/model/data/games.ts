// entities/game/model/games.ts
import { GameMode } from '../types';

export const games = [
    {
        label: 'Битва рук',
        href: '/games/hand-wars',
        modes: ['Онлайн', 'Оффлайн'] as GameMode[],
        icons: [
            {
                src: '/images/hands-war.png',
                alt: 'Битва рук',
                width: 96,
                height: 96,
                mode: 'Оффлайн' as GameMode,
            },
        ],
    },
    {
        label: 'Кости удачи',
        href: '/games/fortune-dice',
        modes: ['Онлайн'] as GameMode[],
        icons: [
            {
                src: '/images/fortune-dice.png',
                alt: 'Кости удачи',
                width: 96,
                height: 96,
                mode: 'Оффлайн' as GameMode,
            },
        ],
    },
];
