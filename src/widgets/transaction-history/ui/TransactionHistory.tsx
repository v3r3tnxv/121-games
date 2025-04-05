import { useTransactions } from "@/entities/transaction";
import { TransactionRecord } from "./TransactionRecord";
import { TransactionHistoryProps } from '../model/types';
import "./TransactionHistory.scss";

export const TransactionHistory = ({ className }: TransactionHistoryProps) => {
    const { transactions } = useTransactions(); // Ожидаем массив

    return (
        <div className={`transaction-list ${className}`}>
            {transactions.map((transaction) => (
                <TransactionRecord
                    key={transaction.id}
                    transaction={transaction}
                />
            ))}
        </div>
    );
};
