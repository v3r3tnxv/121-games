// app/games/hand-wars/page.tsx
import { HandWars } from './ui/HandWarsNew';

export default function HandWarsPage() {
    const matchId = 1;
    const playerId = 1;

    return <HandWars matchId={matchId} playerId={playerId} />;
}
