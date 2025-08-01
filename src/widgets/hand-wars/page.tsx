// app/games/hand-wars/page.tsx
import { getProfile } from '@/entities/user/api/getProfile';
import type { User } from '@/entities/user/model/types';
import { HandWars } from './ui/HandWars';

export default async function HandWarsPage() {
    const telegramId = Number(process.env.NEXT_PUBLIC_TELEGRAM_ID);
    const user: User = await getProfile(telegramId);

    return <HandWars user={user} />;
}
