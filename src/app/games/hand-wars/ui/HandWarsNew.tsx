'use client';

import { useState } from 'react';
import { createAction } from '@/entities/action';
import { getMatchResult } from '@/entities/match';
import { HandPaper, HandRock, HandScissors } from '@/shared/assets/icons';
import { Button } from '@/shared/ui/button';
import styles from './HandWars.module.scss';

type Move = 'rock' | 'paper' | 'scissors';

interface HandWarsProps {
    matchId: number;
    playerId: number;
}

export const HandWars = ({ matchId, playerId }: HandWarsProps) => {
    console.log('HandWars rendered');
    console.log('matchId:', matchId);
    console.log('playerId:', playerId);
    const [selected, setSelected] = useState<Move | null>(null);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<'win' | 'lose' | 'draw' | null>(null);

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

    return (
        <div className={styles.wrapper}>
            <h2>Сделай ход</h2>
            <div className={styles.hands}>
                <Button onClick={() => makeMove('rock')} disabled={!!selected}>
                    <HandRock />
                </Button>
                <Button onClick={() => makeMove('paper')} disabled={!!selected}>
                    <HandPaper />
                </Button>
                <Button onClick={() => makeMove('scissors')} disabled={!!selected}>
                    <HandScissors />
                </Button>
            </div>
            {loading && <p>Ожидаем второго игрока...</p>}
            {result && (
                <p>
                    Результат:{' '}
                    {result === 'win' ? 'Победа' : result === 'lose' ? 'Поражение' : 'Ничья'}
                </p>
            )}
        </div>
    );
};
