// entities/action/api/action.api.ts
import { ApiResponse, api } from '@/shared/api';
import type { Action } from '../model/types';

export const createAction = async (data: {
    matchId: number;
    playerId: number;
    actionData?: object;
    joinedAt?: number;
}): Promise<Action> => {
    const res = await api.post<ApiResponse<Action>>('/actions', data);
    return res.data.data;
};

export const getActionsByMatch = async (matchId: number): Promise<Action[]> => {
    const res = await api.get<ApiResponse<Action[]>>('/actions', {
        params: { matchId },
    });
    return res.data.data;
};

export const getActionById = async (id: number): Promise<Action> => {
    const res = await api.get<ApiResponse<Action>>(`/actions/${id}`);
    return res.data.data;
};

export const updateAction = async (
    id: number,
    data: Partial<Pick<Action, 'actionData'>>
): Promise<Action> => {
    const res = await api.put<ApiResponse<Action>>(`/actions/${id}`, data);
    return res.data.data;
};

export const deleteAction = async (id: number): Promise<void> => {
    await api.delete(`/actions/${id}`);
};
