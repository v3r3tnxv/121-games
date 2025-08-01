'use client';

// features/switchers/game-mode/ui/GameModeSwitcher.tsx
import { Switcher } from '@/shared/ui/switcher';
import { GameModeSwitcherProps, useGameModeSwitcher } from '../model';

export const GameModeSwitcher = ({
    options,
    initialSelected,
    content,
    className,
}: GameModeSwitcherProps) => {
    const { selected, setSelected } = useGameModeSwitcher(
        initialSelected ?? options[0].label,
        options
    );

    return (
        <Switcher
            id="gameModeSwitcher"
            options={options}
            initialSelected={selected}
            className={className}
            content={content}
            onSelect={setSelected}
        />
    );
};
