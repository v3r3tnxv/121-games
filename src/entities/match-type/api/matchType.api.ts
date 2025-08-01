// entities/match-type/api/matchType.api.ts
import { ApiResponse, api } from '@/shared/api';
import type { MatchType } from '../model/types';

export const getAllMatchTypes = async (): Promise<MatchType[]> => {
    const res = await api.get<ApiResponse<MatchType[]>>('/match-types');
    return res.data.data;
};

export const getMatchTypeById = async (id: number): Promise<MatchType> => {
    const res = await api.get<ApiResponse<MatchType>>(`/match-types/${id}`);
    return res.data.data;
};

export const createMatchType = async (name: string): Promise<MatchType> => {
    const res = await api.post<ApiResponse<MatchType>>('/match-types', { name });
    return res.data.data;
};

export const updateMatchType = async (id: number, name: string): Promise<MatchType> => {
    const res = await api.put<ApiResponse<MatchType>>(`/match-types/${id}`, { name });
    return res.data.data;
};

export const deleteMatchType = async (id: number): Promise<void> => {
    await api.delete(`/match-types/${id}`);
};
