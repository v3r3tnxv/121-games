'use client';

// entities/match/model/hooks/useMatch.ts
import { useEffect, useState } from 'react';
import { useProfile } from '@/entities/user';
import { getMatch } from '../../api/getMatch';
import type { Match } from '../types';

export const useMatch = () => {
    const { user } = useProfile();
    const [matches, setMatches] = useState<Match[]>([]);

    useEffect(() => {
        console.log('user:', user);
    }, [user]);

    useEffect(() => {
        if (!user || !user.matchIds?.length) return;

        Promise.all(user.matchIds.map((id) => getMatch(id)))
            .then(setMatches)
            .catch(console.error);
    }, [user]);

    return { matches };
};
