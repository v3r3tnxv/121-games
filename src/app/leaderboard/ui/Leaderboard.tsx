'use client';

// app/leaderboard/Leaderboard.tsx
import { UserAvatar } from '@/entities/user';
import { InfoButton, Plate } from '@/shared/ui';
import { useModal } from '@/widgets/modal';
import type { LeaderboardProps } from '../model/types';
import styles from './Leaderboard.module.scss';

export default function Leaderboard({ users }: LeaderboardProps) {
    const { openModal } = useModal();

    return (
        <div className={styles.leaderboard}>
            <Plate className={styles.plate} rounded="full">
                Топ игроки 
                <InfoButton onClick={() => openModal('leaderboard_info')} />
            </Plate>
            <p className={styles.description}>Рейтинг победителей</p>

            {users.map((u, i) => (
                <div className={styles.item} key={u.id}>
                    <UserAvatar className={styles.avatar} />
                    <span className={styles.nickname}>{u.username}</span>
                    <span className={styles.username}>@{u.username}</span>
                    <span className={styles.wins}>{u.winCount}</span>
                    <span className={styles.rank}>#{i + 1}</span>
                </div>
            ))}
        </div>
    );
}
