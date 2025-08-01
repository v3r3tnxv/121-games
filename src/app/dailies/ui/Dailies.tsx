'use client';

// src/app/dailies/ui/Dailies.tsx
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useProfile } from '@/entities/user';
import { CollectButton, RewardChest, RewardTimer } from '@/features/collect-reward';
import { InfoButton, Plate } from '@/shared/ui';
import { useModal } from '@/widgets/modal';
import { ReferralLink } from '@/widgets/referral-link';
import styles from './Dailies.module.scss';

export function Dailies({ telegramId }: { telegramId: number }) {
    const { user, loading, error } = useProfile(telegramId);
    const { openModal } = useModal();

    // локальное состояние для nextRewardAvailableAt
    const [nextAt, setNextAt] = useState<number | null>(null);

    // когда профиль подгрузился — запоминаем таймстамп
    useEffect(() => {
        if (user) {
            setNextAt(Math.floor(Number(user.nextRewardAvailableAt)));
        }
    }, [user]);

    if (loading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка: {error}</div>;
    if (!user) return <div>Профиль не найден</div>;

    return (
        <div className={styles.dailies}>
            <Plate className={styles.header} rounded="full">
                <RewardTimer className={styles.timer} nextRewardAvailableAt={nextAt} />
                <InfoButton onClick={() => openModal('dailies_info')} />
            </Plate>

            <RewardChest nextRewardAvailableAt={nextAt} />

            <CollectButton
                className={styles.collectButton}
                userId={user!.id}
                nextRewardAvailableAt={nextAt}
                onSuccess={(res) => setNextAt(res.nextRewardAvailableAt ?? null)}
            />

            <div className={styles.invite}>
                <p className={styles.label}>Пригласить друга</p>
                <ReferralLink />
            </div>

            <Plate className={styles.questsWraper} rounded="normal">
                <h2 className={styles.title}>Ежедневные задания</h2>

                <Plate className={styles.quest} rounded="full">
                    <Image src="/icons/crypto.svg" alt="crypto" width={24} height={24} />
                    Дать леща
                    <Image src="/icons/action.svg" alt="action" width={36} height={36} />
                </Plate>

                <Plate className={styles.quest} rounded="full">
                    <Image src="/icons/crypto.svg" alt="crypto" width={24} height={24} />
                    Сломать колени
                    <Image src="/icons/complete.svg" alt="complete" width={36} height={36} />
                </Plate>

                <Plate className={styles.quest} rounded="full">
                    <Image src="/icons/crypto.svg" alt="crypto" width={24} height={24} />
                    Дать леща
                    <Image src="/icons/complete.svg" alt="complete" width={36} height={36} />
                </Plate>
            </Plate>
        </div>
    );
}

export default Dailies;
