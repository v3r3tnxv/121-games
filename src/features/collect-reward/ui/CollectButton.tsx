'use client';

// features/collect-reward/ui/CollectButton.tsx
import clsx from 'clsx';
import { Button } from '@/shared/ui';
import { CollectButtonProps } from '../model/types';
import { useCollectReward } from '../model/useCollectReward';
import { useRewardTimer } from '../model/useRewardTimer';
import styles from './CollectButton.module.scss';

export const CollectButton = ({
    userId,
    className,
    nextRewardAvailableAt,
    onSuccess,
}: CollectButtonProps & { nextRewardAvailableAt: number | null }) => {
    const { collect, loading } = useCollectReward();

    const timeLeft = useRewardTimer(nextRewardAvailableAt);
    const isAvailable = timeLeft === 0;

    const handleClick = async () => {
        if (!isAvailable) return;
        const res = await collect(userId);
        onSuccess?.(res);
    };

    return (
        <Button
            onClick={handleClick}
            className={clsx(
                styles.button,
                className,
                { [styles.disabled]: !isAvailable },
                { [styles.loading]: loading }
            )}
            disabled={loading || !isAvailable}
        >
            {loading ? 'Загрузка...' : isAvailable ? 'Получить' : 'Получить'}
        </Button>
    );
};
