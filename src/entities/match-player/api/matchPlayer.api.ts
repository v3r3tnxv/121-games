// entities/match-player/api/matchPlayer.api.ts
import { ApiResponse, api } from '@/shared/api';
import type { MatchPlayer } from '../model/types';

export const getPlayersByMatchId = async (matchId: number): Promise<MatchPlayer[]> => {
    const res = await api.get<ApiResponse<MatchPlayer[]>>(`/match-players/match/${matchId}`);
    return res.data.data;
};

export const addPlayerToMatch = async (data: {
    match_id: number;
    player_id: number;
    joined_at?: Date;
}): Promise<MatchPlayer> => {
    const res = await api.post<ApiResponse<MatchPlayer>>('/match-players', data);
    return res.data.data;
};

export const getPlayerById = async (id: number): Promise<MatchPlayer> => {
    const res = await api.get<ApiResponse<MatchPlayer>>(`/match-players/${id}`);
    return res.data.data;
};

export const getAllPlayers = async (): Promise<MatchPlayer[]> => {
    const res = await api.get<ApiResponse<MatchPlayer[]>>('/match-players');
    return res.data.data;
};

export const updatePlayer = async (
    id: number,
    data: Partial<{
        match_id: number;
        player_id: number;
        joined_at?: Date;
    }>
): Promise<MatchPlayer> => {
    const res = await api.put<ApiResponse<MatchPlayer>>(`/match-players/${id}`, data);
    return res.data.data;
};

export const deletePlayer = async (id: number): Promise<void> => {
    await api.delete(`/match-players/${id}`);
};
