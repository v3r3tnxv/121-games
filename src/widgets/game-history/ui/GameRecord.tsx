import { GameRecordProps } from '../model/types';
import "./GameRecord.scss";
import Image from 'next/image';

export const GameRecord = ({ className, game }: GameRecordProps) => {
    const amountClass = game.amount < 0 ? "game-record__amount--negative" : "game-record__amount--positive";

    return (
        <div className={`game-record ${className}`}>
            <Image
                className="game-record__image"
                src={"/icons/hammer.svg"}
                alt={"Копировать"}
                width={32}
                height={32}
            />

            <span className="game-record__id">{game.id}</span>

            <span className={`game-record__amount`}>
                {game.amount}
                <span className="game-record__currency">{game.currency}</span>
            </span>

            <span className={`game-record__amount-dollar ${amountClass}`}>$120.00</span>
            <span className="game-record__time">{game.time}</span>
            <span className="game-record__date">{game.date}</span>
        </div>
    );
};
