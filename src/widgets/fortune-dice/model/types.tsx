import { Game } from '@/entities/game';
import { User } from '@/entities/user';

export interface FortuneDiceProps {
    game: Game;
    user: User | null;
}
