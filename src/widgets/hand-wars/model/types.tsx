import { Game } from '@/entities/game';
import { User } from '@/entities/user';

export interface HandWarsProps {
    game: Game;
    user: User | null;
}
