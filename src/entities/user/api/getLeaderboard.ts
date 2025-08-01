// entities/user/model/api/getLeaderboard.ts
import axios from 'axios';
import { Match } from '@/entities/match';
import { User } from '../model';

export const getLeaderboard = async (): Promise<User[]> => {
    const response = await axios.get<{ data: Match[] }>('http://localhost:8080/v1/matches');
    const matches = response.data.data;

    const winsMap = new Map<number, number>();

    for (const match of matches) {
        if (!match.winnerId || match.winnerId === 0) continue;
        winsMap.set(match.winnerId, (winsMap.get(match.winnerId) || 0) + 1);
    }

    const leaderboard = Array.from(winsMap.entries())
        .map(([id, winCount]) => ({ id, winCount }))
        .sort((a, b) => b.winCount - a.winCount)
        .slice(0, 30);

    const users = await Promise.all(
        leaderboard.map(async ({ id, winCount }) => {
            const response = await axios.post<{ data: { user: User } }>(
                'http://localhost:8080/v1/user',
                { telegramId: id }
            );
            return { ...response.data.data.user, winCount };
        })
    );

    return users;
};
