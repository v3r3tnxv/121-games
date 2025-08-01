// app/profile/ui/Profile.tsx
import Image from 'next/image';
import clsx from 'clsx';
import { User, UserAvatar, getUserByTelegramId } from '@/entities/user';
import { BalanceSwitcher } from '@/features/switchers/balance-switcher';
// import { HistorySwitcher } from '@/features/switchers/history-switcher';
import { Button } from '@/shared/ui';
// import { MatchesHistory } from '@/widgets/matches-history';
import { ReferralLink } from '@/widgets/referral-link';
// import { TransactionsHistory } from '@/widgets/transaction-history';
import styles from './Profile.module.scss';

interface ProfileProps {
    telegramId: number;
}

export async function Profile({ telegramId }: ProfileProps) {
    let user: User | null = null;
    let error: string | null = null;

    try {
        user = await getUserByTelegramId(telegramId);
    } catch (e) {
        error = (e as Error).message || 'Ошибка загрузки профиля';
    }

    if (error) {
        return <div>Ошибка: {error}</div>;
    }
    if (!user) {
        return <div>Профиль не найден</div>;
    }

    return (
        <div className={styles.profile}>
            <section className={styles.header}>
                <UserAvatar className={styles.avatar} />
                <span className={styles.nickname}>{user.username}</span>
                <span className={styles.username}>@{user.username}</span>
            </section>

            <section className={styles.balance}>
                <BalanceSwitcher
                    options={[{ label: 'GTN' }, { label: 'TON' }]}
                    initialSelected="GTN"
                    user={user}
                />

                <div className={styles.balanceActions}>
                    <Button className={styles.actionButton} label="Пополнить">
                        <Image
                            className={styles.icon}
                            src={'/icons/arrow.svg'}
                            alt={'Пополнить'}
                            width={16}
                            height={16}
                        />
                    </Button>

                    <Button className={styles.actionButton} label="Вывести">
                        <Image
                            className={clsx(styles.icon, styles.iconWithdrawal)}
                            src={'/icons/arrow.svg'}
                            alt={'Вывести'}
                            width={16}
                            height={16}
                        />
                    </Button>

                    <Button className={styles.actionButton} label="Обменять">
                        <Image
                            className={clsx(styles.icon, styles.iconChange)}
                            src={'/icons/arrow-double.svg'}
                            alt={'Обменять'}
                            width={16}
                            height={16}
                        />
                    </Button>
                </div>
            </section>

            <section className={styles.referrals}>
                <span className={styles.amount}>Рефераллы: {user.referralCount}</span>
                <ReferralLink />
            </section>

            {/* <section className={styles.history}>
                <p className={styles.title}>Последние действия</p>
                <HistorySwitcher
                    options={[{ label: 'История игр' }, { label: 'История платежей' }]}
                    content={{
                        'История игр': <MatchesHistory />,
                        'История платежей': <TransactionsHistory />,
                    }}
                />
            </section> */}
        </div>
    );
}
