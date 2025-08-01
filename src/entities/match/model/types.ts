export interface Match {
    id: number;
    gameId: number;
    matchType: number;
    maxPlayer: number;
    startTime: number;
    winnerId: number;
    lifetime: number;
    price: number;
    type: number;
    status: number;
    createdAt: string; // ISO дата
    updatedAt: string; // ISO дата

    // id: string;
    amount: number;
    currency: string;
    // type: string;
    // status: string;
    // type: "deposit" | "withdrawal" | "change";
    // status: "pending" | "completed" | "failed";
    // date: string;
    // time: string;
}
