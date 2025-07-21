'use client';

// shared/ui/switcher/Switcher.tsx
import { useState } from 'react';
import clsx from 'clsx';
import { Button } from '@/shared/ui';
import styles from './Switcher.module.scss';
import { SwitcherProps } from './types';

export const Switcher = ({
    options,
    className,
    content,
    initialSelected,
    onSelect,
}: SwitcherProps) => {
    const [selected, setSelected] = useState(initialSelected ?? options[0].label);

    const handleSelect = (label: string) => {
        setSelected(label);
        if (onSelect) onSelect(label);
    };

    return (
        <div className={clsx(styles.switcher, className)}>
            <div className={styles.switches}>
                {options.map(({ label }) => (
                    <Button
                        key={label}
                        className={clsx(styles.button, { [styles.active]: selected === label })}
                        label={label}
                        onClick={() => handleSelect(label)}
                        variant="switch"
                    />
                ))}
            </div>

            <div className={styles.content}>{content[selected]}</div>
        </div>
    );
};
