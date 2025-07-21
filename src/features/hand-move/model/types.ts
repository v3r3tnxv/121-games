export type Move = 'rock' | 'paper' | 'scissors';

export type Result = 'win' | 'lose' | 'draw' | null;

export interface MoveProps {
    matchId: number;
    playerId: number;
}
