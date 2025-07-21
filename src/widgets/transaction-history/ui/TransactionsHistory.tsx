'use client';

// widgets/transactions-history/ui/TransactionsHistory.tsx
import clsx from 'clsx';
import { useTransactions } from '@/entities/transaction';
import { TransactionRecord } from './TransactionRecord';
import styles from './TransactionsHistory.module.scss';

export const TransactionsHistory = ({ className }: { className?: string }) => {
    const { transactions, loading, error } = useTransactions();

    if (loading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка: {error}</div>;
    if (!transactions) return <div>Транзакций нет</div>;

    return (
        <div className={clsx(styles.list, className)}>
            {transactions.map((transaction) => (
                <TransactionRecord
                    key={transaction.id}
                    transaction={{
                        ...transaction,
                        type: transaction.type,
                        status: transaction.status,
                    }}
                />
            ))}
        </div>
    );
};
