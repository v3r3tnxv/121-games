'use client';

// features/collect-reward/ui/RewardTimer.ts
import { RewardTimerProps } from '../model/types';
import { useRewardTimer } from '../model/useRewardTimer';

export const RewardTimer = ({ className, nextRewardAvailableAt }: RewardTimerProps) => {
    const seconds = useRewardTimer(nextRewardAvailableAt);

    const format = (s: number) => {
        const h = String(Math.floor(s / 3600)).padStart(2, '0');
        const m = String(Math.floor((s % 3600) / 60)).padStart(2, '0');
        const sec = String(s % 60).padStart(2, '0');
        return `${h}:${m}:${sec}`;
    };

    return <div className={className}>{seconds > 0 ? format(seconds) : '00:00:00'}</div>;
};
