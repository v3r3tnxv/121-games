'use client';

// features/collect-reward/model/useRewardTimer.ts
import { useEffect, useState } from 'react';

export const useRewardTimer = (nextRewardAt: number | null) => {
    const [timeLeft, setTimeLeft] = useState(
        nextRewardAt ? nextRewardAt - Math.floor(Date.now() / 1000) : 0
    );

    useEffect(() => {
        setTimeLeft(nextRewardAt ? nextRewardAt - Math.floor(Date.now() / 1000) : 0);
        const id = setInterval(() => {
            setTimeLeft((t) => Math.max(0, t - 1));
        }, 1000);
        return () => clearInterval(id);
    }, [nextRewardAt]);

    return timeLeft;
};
