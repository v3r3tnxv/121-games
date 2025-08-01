'use client';

import { HandPaper, HandRock, HandScissors } from '@/shared/assets/icons';
import { MoveProps, useHandMove } from '../model';
import styles from './HandMove.module.scss';

export const HandMove = ({ matchId, playerId }: MoveProps) => {
    const { selected, loading, result, makeMove } = useHandMove(matchId, playerId);

    const renderResult = () => {
        if (!result) return null;
        if (result === 'win') return <p>🎉 Победа!</p>;
        if (result === 'lose') return <p>💀 Поражение</p>;
        return <p>🤝 Ничья</p>;
    };

    const disabled = !!selected || loading;

    return (
        <div className={styles.wrapper}>
            <h2>Сделай ход</h2>
            <div className={styles.hands}>
                <button onClick={() => makeMove('rock')} disabled={disabled}>
                    <HandRock />
                </button>
                <button onClick={() => makeMove('paper')} disabled={disabled}>
                    <HandPaper />
                </button>
                <button onClick={() => makeMove('scissors')} disabled={disabled}>
                    <HandScissors />
                </button>
            </div>
            {loading && <p>⏳ Ожидание второго игрока...</p>}
            {renderResult()}
        </div>
    );
};
