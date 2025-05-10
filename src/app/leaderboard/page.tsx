"use client"

import { UserAvatar, useProfile } from "@/entities/user";
import { InfoButton, Plate } from "@/shared/ui";
import { useModal } from "@/widgets/modal";
import styles from "./Leaderboard.module.scss"

const LeaderboardPage = () => {
    const { user } = useProfile();
    const { openModal } = useModal();

    const handleClick = () => {
        openModal('leaderboard_info');  // Открытие модалки с типом 'bank-info'
    };

    return (
        <div className={styles.leaderboard}>
            <Plate className={styles.leaderboard__plate} rounded="full">
                Топ игроки <InfoButton onClick={handleClick} />
            </Plate>
            <p className={styles.leaderboard__description}>30 лучших игроков</p>
            <div className={styles.leaderboard__item}>
                <UserAvatar className={styles.leaderboard__avatar} />
                <span className={styles.leaderboard__nickname}>{user.nickname}</span>
                <span className={styles.leaderboard__username}>@{user.username}</span>
                <span className={styles.leaderboard__wins}>105</span>
                <span className={styles.leaderboard__rank}>︿2</span>
            </div >
        </div >
    );
};

export default LeaderboardPage;
