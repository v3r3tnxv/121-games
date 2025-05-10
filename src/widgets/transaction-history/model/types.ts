// widgets/tansaction-history/model/types.ts
import { Transaction } from "@/entities/transaction";

export type TransactionHistoryProps = {
    className?: string;
};

export type TransactionRecordProps = {
    className?: string;
    transaction: Transaction;
};