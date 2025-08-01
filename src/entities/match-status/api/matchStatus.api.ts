// entities/match-status/api/matchStatus.api.ts
import { ApiResponse, api } from '@/shared/api';
import type { MatchStatus } from '../model/types';

export const getAllMatchStatuses = async (): Promise<MatchStatus[]> => {
    const res = await api.get<ApiResponse<MatchStatus[]>>('/match-statuses');
    return res.data.data;
};

export const getMatchStatusById = async (id: number): Promise<MatchStatus> => {
    const res = await api.get<ApiResponse<MatchStatus>>(`/match-statuses/${id}`);
    return res.data.data;
};

export const createMatchStatus = async (name: string): Promise<MatchStatus> => {
    const res = await api.post<ApiResponse<MatchStatus>>('/match-statuses', { name });
    return res.data.data;
};

export const updateMatchStatus = async (id: number, name: string): Promise<MatchStatus> => {
    const res = await api.put<ApiResponse<MatchStatus>>(`/match-statuses/${id}`, { name });
    return res.data.data;
};

export const deleteMatchStatus = async (id: number): Promise<void> => {
    await api.delete(`/match-statuses/${id}`);
};
