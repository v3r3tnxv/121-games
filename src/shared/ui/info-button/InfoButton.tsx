import { InfoButtonProps } from './types';
import "./InfoButton.scss";
import Image from 'next/image';

export const InfoButton = ({
    onClick,
    className
}: InfoButtonProps) => {

    return (
        <button
            className={`info-button ${className}`}
            onClick={onClick}
        >
            <Image
                className={"info-button__image"}
                src={"/icons/info.svg"}
                alt="Подробнее"
                width={24}
                height={24}
            />
        </button>
    );
};