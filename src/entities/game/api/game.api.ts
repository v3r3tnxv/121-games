// entities/game/api/game.api.ts
import { ApiResponse, api } from '@/shared/api';
import type { Game } from '../model/types';

export const createGame = async (data: {
    name: string;
    description: string;
    image: string;
}): Promise<Game> => {
    const res = await api.post<ApiResponse<Game>>('/games', data);
    return res.data.data;
};

export const getGameById = async (id: number): Promise<Game> => {
    const res = await api.get<ApiResponse<Game>>(`/games/${id}`);
    return res.data.data;
};

export const getAllGames = async (): Promise<Game[]> => {
    const res = await api.get<ApiResponse<Game[]>>('/games');
    return res.data.data;
};

export const updateGame = async (
    id: number,
    data: Partial<{ name: string; description: string; image: string }>
): Promise<Game> => {
    const res = await api.put<ApiResponse<Game>>(`/games/${id}`, data);
    return res.data.data;
};

export const deleteGame = async (id: number): Promise<void> => {
    await api.delete(`/games/${id}`);
};
