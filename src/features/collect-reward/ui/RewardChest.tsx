'use client';

// features/collect-reward/ui/RewardChest.tsx
import Image from 'next/image';
import clsx from 'clsx';
import { RewardChestProps } from '../model/types';
import { useRewardTimer } from '../model/useRewardTimer';
import styles from './RewardChest.module.scss';

export const RewardChest = ({ nextRewardAvailableAt }: RewardChestProps) => {
    const timeLeft = useRewardTimer(nextRewardAvailableAt);
    const src = timeLeft === 0 ? '/images/chest-open.png' : '/images/chest-closed.png';
    const isOpen = timeLeft === 0;

    return (
        <div
            className={clsx(
                styles.wrapper,
                { [styles.open]: isOpen },
                { [styles.closed]: !isOpen }
            )}
        >
            <Image className={styles.chest} src={src} alt="сундук" width={190} height={190} />{' '}
            {isOpen && (
                <div className={styles.raysContainer}>
                    <div className={styles.ray} />
                    <div className={styles.ray} />
                    <div className={styles.ray} />
                    <div className={styles.ray} />
                    <div className={styles.ray} />
                </div>
            )}
        </div>
    );
};
