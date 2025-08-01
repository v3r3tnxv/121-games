'use client';

// features/switchers/game-mode/ui/HistorySwitcher.tsx
import { Switcher } from '@/shared/ui/switcher';
import { HistorySwitcherProps, useHistorySwitcher } from '../model';

export const HistorySwitcher = ({
    options,
    initialSelected,
    content,
    className,
}: HistorySwitcherProps) => {
    const { selected, setSelected } = useHistorySwitcher(
        initialSelected ?? options[0].label,
        options
    );

    return (
        <Switcher
            id="historySwitcher"
            options={options}
            initialSelected={selected}
            className={className}
            content={content}
            onSelect={setSelected}
        />
    );
};
