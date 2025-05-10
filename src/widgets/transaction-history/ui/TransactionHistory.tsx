// widgets/tansaction-history/ui/TransactionHistory.tsx
import { useTransactions } from "@/entities/transaction";
import { TransactionRecord } from "./TransactionRecord";
import { TransactionHistoryProps } from '../model/types';
import { TransactionType, TransactionStatus } from "@/entities/transaction/model/types";
import "./TransactionHistory.scss";


export const TransactionHistory = ({ className }: TransactionHistoryProps) => {
    const { transactions } = useTransactions(); // Ожидаем массив

    return (
        <div className={`transaction-list ${className}`}>
            {transactions.map((transaction) => (
                <TransactionRecord
                    key={transaction.id}
                    transaction={{
                        ...transaction,
                        type: transaction.type as TransactionType,
                        status: transaction.status as TransactionStatus,
                    }}
                />
            ))}
        </div>
    );
};
