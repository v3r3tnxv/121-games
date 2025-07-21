// features/hand-move/model/useHandMove.ts
import { useState } from 'react';
import { createAction } from '@/entities/action';
import { getMatchResult } from '@/entities/match';
import type { Move, Result } from '.';

export const useHandMove = (matchId: number, playerId: number) => {
    const [selected, setSelected] = useState<Move | null>(null);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<Result>(null);

    const makeMove = async (move: Move) => {
        if (loading || selected) return;

        setSelected(move);
        setLoading(true);

        try {
            await createAction({
                matchId,
                playerId,
                actionData: { move },
                joinedAt: Math.floor(Date.now() / 1000),
            });

            const interval = setInterval(async () => {
                const data = await getMatchResult(matchId);
                if (data.status === 4) {
                    clearInterval(interval);
                    if (data.winnerId === null) {
                        setResult('draw');
                    } else if (data.winnerId === playerId) {
                        setResult('win');
                    } else {
                        setResult('lose');
                    }
                    setLoading(false);
                }
            }, 1500);
        } catch (e) {
            console.error(e);
            setLoading(false);
        }
    };

    return {
        selected,
        loading,
        result,
        makeMove,
    };
};
