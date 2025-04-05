import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Transaction } from "../types";

interface TransactionState {
    transactions: Transaction[];
}

const initialState: TransactionState = {
    transactions: [],
};

const transactionSlice = createSlice({
    name: "transactions",
    initialState,
    reducers: {
        setTransactions(state, action: PayloadAction<Transaction[]>) {
            state.transactions = action.payload;
        },
    },
});

export const { setTransactions } = transactionSlice.actions;
export default transactionSlice.reducer;
