'use client';

// features/switchers/balance-switcher/ui/BalanceSwitcher.tsx
import Image from 'next/image';
import { tokens } from '@/entities/user';
import { Plate } from '@/shared/ui/plate';
import { Switcher } from '@/shared/ui/switcher';
import { BalanceSwitcherProps, useBalanceSwitcher } from '../model';
import styles from './BalanceSwitcher.module.scss';

export const BalanceSwitcher = ({
    options,
    initialSelected,
    className,
    user,
}: BalanceSwitcherProps) => {
    const { selected, setSelected } = useBalanceSwitcher(
        initialSelected ?? options[0].label,
        options
    );

    // Генерируем контент динамически, используя tokens и user
    const balanceContent = tokens.reduce<Record<string, React.ReactNode>>((acc, token) => {
        const balance =
            token.label === 'GTN' ? user.balanceCoin : token.label === 'TON' ? user.balanceMain : 0;
        const dollarValue = token.label === 'GTN' ? '$100.00' : '$20.00';

        acc[token.label] = (
            <Plate className={styles.plate}>
                <span className={styles.balanceAmount}>
                    {balance} {token.label}
                </span>
                <span className={styles.currencyDollar}>{dollarValue}</span>
                <Image
                    src={token.icons[0].src}
                    alt={token.icons[0].alt}
                    width={token.icons[0].width}
                    height={token.icons[0].height}
                    priority={token.label === selected}
                />
            </Plate>
        );
        return acc;
    }, {});

    return (
        <Switcher
            id="BalanceSwitcher"
            options={options}
            initialSelected={selected}
            className={className}
            content={balanceContent}
            onSelect={setSelected}
        />
    );
};
