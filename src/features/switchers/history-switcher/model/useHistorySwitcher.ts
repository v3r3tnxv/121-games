// features/switchers/game-mode/model/useHistorySwitcher.ts
import { useState } from 'react';
import { HistorySwitcherOption } from './types';

export function useHistorySwitcher(initialMode: string, options: HistorySwitcherOption[]) {
    const [selected, setSelected] = useState(initialMode ?? options[0].label);

    return { selected, setSelected };
}
