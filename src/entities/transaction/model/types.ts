// entities/transaction/model/types.ts
export interface Transaction {
    id: string;
    gameId: number;
    matchType: number;
    maxPlayer: number;
    startTime: string;
    winnerId: number;
    lifetime: string;
    price: number;
    type: number;
    status: number;
    createdAt: string;
    updatedAt: string;
    amount: number;
}
