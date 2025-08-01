// widgets/transaction-history/ui.TransactionRecord.tsx
import Image from 'next/image';
import clsx from 'clsx';
import { TransactionRecordProps } from '../model/types';
import styles from './TransactionRecord.module.scss';

export const TransactionRecord = ({ className, transaction }: TransactionRecordProps) => {
    const amountClass = transaction.amount < 0 ? styles.negative : styles.positive;

    return (
        <div className={clsx(styles.transactionRecord, className)}>
            <Image
                className={styles.image}
                src={'/icons/hammer.svg'}
                alt={'Молот'}
                width={32}
                height={32}
            />

            <span className={styles.id}>{transaction.id}</span>

            <span className={styles.amount}>
                {}
                <span className={styles.currency}>{}</span>
            </span>

            <span className={clsx(styles.amountDollar, amountClass)}>$120.00</span>
            <span className={styles.time}>{}</span>
            <span className={styles.date}>{}</span>
        </div>
    );
};
