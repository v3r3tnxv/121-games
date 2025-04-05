export interface Game {
    id: string;
    amount: number;
    currency: string;
    type: string;
    status: string;
    // type: "deposit" | "withdrawal" | "change";
    // status: "pending" | "completed" | "failed";
    date: string;
    time: string;
}
