// app/dailies/page.tsx
import { telegramId } from '@/shared/config';
import { Dailies } from './ui/Dailies';

export default async function DailiesPage() {
    return <Dailies telegramId={telegramId} />;
}
