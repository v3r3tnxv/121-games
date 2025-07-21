'use client';

import { useMatch } from '@/entities/match';
import { MatchesHistoryProps } from '../model/types';
import { MatchRecord } from './MatchRecord';
import styles from './MatchesHistory.module.scss';

export const MatchesHistory = ({ className }: MatchesHistoryProps) => {
    const { matches } = useMatch();

    if (!matches.length) {
        return <p className={`${styles.matchHistory} ${className ?? ''}`}>Матчи не найдены</p>;
    }

    return (
        <div className={`${styles.matchHistory} ${className ?? ''}`}>
            {matches.map((match) => (
                <MatchRecord key={match.id} match={match} className={styles.matchHistoryItem} />
            ))}
        </div>
    );
};
