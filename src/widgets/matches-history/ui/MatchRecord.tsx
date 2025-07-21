import Image from 'next/image';
import clsx from 'clsx';
import { MatchRecordProps } from '../model/types';
import styles from './MatchRecord.module.scss';

export const MatchRecord = ({ className, match }: MatchRecordProps) => {
    const amountColorClass = match.amount < 0 ? styles.negative : styles.positive;

    return (
        <div className={clsx(styles.matchRecord, className)}>
            <Image
                className={styles.image}
                src="/icons/hammer.svg"
                alt="Иконка"
                width={32}
                height={32}
            />

            <span className={styles.id}>{match.id}</span>

            <span className={styles.amount}>
                {match.amount}
                <span className={styles.currency}>{match.currency}</span>
            </span>

            <span className={clsx(styles.amountDollar, amountColorClass)}>$120.00</span>
            <span className={styles.time}>{match.createdAt}</span>
        </div>
    );
};
