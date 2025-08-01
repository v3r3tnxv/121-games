'use client';

// features/collect-reward/model/useCollectReward.ts
import { useCallback, useState } from 'react';
import { getReward } from '@/entities/user';

export const useCollectReward = () => {
    const [loading, setLoading] = useState(false);

    const collect = useCallback(async (userId: number) => {
        setLoading(true);
        try {
            const response = await getReward(userId);
            return response;
        } finally {
            setLoading(false);
        }
    }, []);

    return { collect, loading };
};
