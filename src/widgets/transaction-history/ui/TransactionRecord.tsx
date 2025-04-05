import { TransactionRecordProps } from '../model/types';
import "./TransactionRecord.scss";
import Image from 'next/image';

export const TransactionRecord = ({ className, transaction }: TransactionRecordProps) => {
    const amountClass = transaction.amount < 0 ? "transaction-record__amount--negative" : "transaction-record__amount--positive";

    return (
        <div className={`transaction-record ${className}`}>
            <Image
                className="transaction-record__image"
                src={"/icons/hammer.svg"}
                alt={"Молот"}
                width={32}
                height={32}
            />

            <span className="transaction-record__id">{transaction.id}</span>

            <span className={`transaction-record__amount`}>
                {transaction.amount}
                <span className="transaction-record__currency">{transaction.currency}</span>
            </span>

            <span className={`transaction-record__amount-dollar ${amountClass}`}>$120.00</span>
            <span className="transaction-record__time">{transaction.time}</span>
            <span className="transaction-record__date">{transaction.date}</span>
        </div>
    );
};
