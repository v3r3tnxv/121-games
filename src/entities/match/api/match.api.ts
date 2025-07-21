// entities/match/api/matches.api.ts
import { ApiResponse, api } from '@/shared/api';
import type { Match } from '../model/types';

export const getMatchesByType = async (type: number): Promise<Match[]> => {
    const res = await api.get<ApiResponse<Match[]>>(`/matches/type/${type}`);
    return res.data.data;
};

export const createMatch = async (data: {
    gameId: number;
    matchType: number;
    maxPlayer: number;
    startTime: number;
    createdBy: number;
    price?: number;
    type?: number;
    status?: number;
    lifetime?: number;
}): Promise<Match> => {
    const res = await api.post<ApiResponse<Match>>('/matches', data);
    return res.data.data;
};

export const getMatchById = async (id: number): Promise<Match> => {
    const res = await api.get<ApiResponse<Match>>(`/matches/${id}`);
    return res.data.data;
};

export const getAllMatches = async (): Promise<Match[]> => {
    const res = await api.get<ApiResponse<Match[]>>('/matches');
    return res.data.data;
};

export const updateMatch = async (
    id: number,
    data: Partial<{
        gameId: number;
        matchType: number;
        maxPlayer: number;
        startTime: number;
        createdBy: number;
        price: number;
        type: number;
        status: number;
        lifetime: number;
        winnerId: number | null;
    }>
): Promise<Match> => {
    const res = await api.put<ApiResponse<Match>>(`/matches/${id}`, data);
    return res.data.data;
};

export const deleteMatch = async (id: number): Promise<void> => {
    await api.delete(`/matches/${id}`);
};

export const getMatchResult = async (
    id: number
): Promise<{ matchId: number; status: number; winnerId: number | null }> => {
    const res = await api.get<
        ApiResponse<{ matchId: number; status: number; winnerId: number | null }>
    >(`/matches/result/${id}`);
    return res.data.data;
};
