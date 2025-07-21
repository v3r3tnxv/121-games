// features/hand-choice/api/makeMove.ts
import { api } from '@/shared/api';
import type { HandType } from '../model';

export const makeMove = async (matchId: number, playerId: number, move: HandType) => {
    const response = await api.post('/rock-paper-scissors/move', {
        matchId,
        playerId,
        move,
    });
    return response.data;
};
