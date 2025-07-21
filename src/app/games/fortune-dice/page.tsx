// src/app/games/fortune-dice/page.tsx
import { getProfile } from '@/entities/user/api/getProfile';
import type { User } from '@/entities/user/model/types';
import FortuneDice from './ui/FortuneDice';

export default async function FortuneDicePage() {
    const telegramId = Number(process.env.NEXT_PUBLIC_TELEGRAM_ID);
    const user: User = await getProfile(telegramId);

    return <FortuneDice user={user} />;
}
