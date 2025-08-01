// widgets/transaction-history/model/types.ts
import { Transaction } from '@/entities/transaction';

export type TransactionsHistoryProps = {
    className?: string;
};

export type TransactionRecordProps = {
    className?: string;
    transaction: Transaction;
};
