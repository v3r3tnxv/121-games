import type { User } from '@/entities/user';

export type BalanceSwitcherOption = {
    label: string;
};

export interface BalanceSwitcherProps {
    options: { label: string }[];
    initialSelected?: string;
    className?: string;
    user: Pick<User, 'balanceCoin' | 'balanceMain'>;
}
