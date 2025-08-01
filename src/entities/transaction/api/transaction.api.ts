import { ApiResponse, api } from '@/shared/api';
import type { Transaction } from '../model/types';

export const getTransactions = async (telegramId: number): Promise<Transaction[]> => {
    const res = await api.post<ApiResponse<{ transactions: Transaction[] }>>('/transactions/all', {
        telegramId,
    });
    return res.data.data.transactions;
};

export const createTransaction = async (data: {
    telegramId: number;
    type: string;
    amount: number;
    status: string;
}): Promise<Transaction> => {
    const res = await api.post<ApiResponse<{ transaction: Transaction }>>('/transactions', data);
    return res.data.data.transaction;
};

export const updateTransaction = async (data: {
    transactionId: number;
    telegramId: number;
    updates: Partial<Pick<Transaction, 'type' | 'amount' | 'status'>>;
}): Promise<Transaction> => {
    const res = await api.put<ApiResponse<{ transaction: Transaction }>>('/transactions', data);
    return res.data.data.transaction;
};

export const deleteTransaction = async (data: {
    transactionId: number;
    telegramId: number;
}): Promise<void> => {
    await api.request({
        method: 'DELETE',
        url: '/transactions',
        data,
    });
};
