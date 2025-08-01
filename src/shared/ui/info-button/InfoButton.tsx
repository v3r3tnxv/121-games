import Image from 'next/image';
import clsx from 'clsx';
import styles from './InfoButton.module.scss';
import { InfoButtonProps } from './types';

export const InfoButton = ({ onClick, className }: InfoButtonProps) => {
    return (
        <button className={clsx(styles.infoButton, className)} onClick={onClick}>
            <Image
                className={styles.image}
                src={'/icons/info.svg'}
                alt="Подробнее"
                width={24}
                height={24}
            />
        </button>
    );
};
