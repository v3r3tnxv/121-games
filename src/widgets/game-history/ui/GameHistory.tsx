import { useGames } from "@/entities/game";
import { GameRecord } from "./GameRecord";
import { GameHistoryProps } from '../model/types';
import "./GameHistory.scss";

export const GameHistory = ({ className }: GameHistoryProps) => {
    const { games } = useGames(); // Ожидаем массив

    return (
        <div className={`game-history ${className}`}>
            {games.map((game) => (
                <GameRecord
                    key={game.id}
                    game={game}
                />
            ))}
        </div>
    );
};
