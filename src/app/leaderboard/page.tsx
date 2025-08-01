// app/leaderboard/page.tsx
import { getLeaderboard } from '@/entities/user/api/getLeaderboard';
import { getProfile } from '@/entities/user/api/getProfile';
import type { User } from '@/entities/user/model/types';
import LeaderboardClient from './ui/Leaderboard';

export default async function LeaderboardPage() {
    const telegramId = Number(process.env.NEXT_PUBLIC_TELEGRAM_ID);
    const [users, me]: [User[], User] = await Promise.all([
        getLeaderboard(),
        getProfile(telegramId),
    ]);

    const inList = users.some((u) => u.telegramId === me.telegramId);
    const fullList = inList ? users : [...users, me];

    return <LeaderboardClient users={fullList} />;
}
