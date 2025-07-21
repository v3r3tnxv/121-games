// entities/game/model/gameModes.ts
export const gameModes = ['Онлайн', 'Оффлайн'] as const;

export type GameMode = (typeof gameModes)[number];

export interface Game {
    id: number;
    name: string;
    description: string;
    image: string;
}

export interface ApiResponse<T> {
    data: T;
}
