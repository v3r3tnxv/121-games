// features/switchers/game-mode/ui/useBalanceSwitcher.tsx
import { useState } from 'react';
import { BalanceSwitcherOption } from './types';

export function useBalanceSwitcher(initialMode: string, options: BalanceSwitcherOption[]) {
    const [selected, setSelected] = useState(initialMode ?? options[0].label);

    return { selected, setSelected };
}
