export interface MatchPlayer {
    id: number;
    match_id: number;
    player_id: number;
    joined_at: string; // или Date, если преобразуешь
    createdAt: string;
    updatedAt: string;
}
