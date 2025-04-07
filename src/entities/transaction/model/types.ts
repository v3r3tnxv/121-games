// entities/tansaction/model/types.ts
export type TransactionType = 'deposit' | 'withdrawal' | 'change';
export type TransactionStatus = 'pending' | 'completed' | 'failed';

export interface Transaction {
    id: string;
    amount: number;
    currency: string;
    type: TransactionType;
    status: TransactionStatus;
    date: string;
    time: string;
}