// app/profile/page.tsx
import { telegramId } from '@/shared/config';
import { Profile } from './ui/Profile';

export default function ProfilePage() {
    return <Profile telegramId={telegramId} />;
}
