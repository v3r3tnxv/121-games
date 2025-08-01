// features/switchers/game-mode/model/useGameModeSwitcher.ts
import { useState } from 'react';
import { GameModeSwitcherOption } from './types';

export function useGameModeSwitcher(initialMode: string, options: GameModeSwitcherOption[]) {
    const [selected, setSelected] = useState(initialMode ?? options[0].label);

    return { selected, setSelected };
}
