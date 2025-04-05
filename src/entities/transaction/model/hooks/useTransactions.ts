// Бизнес-логика профиля
export const useTransactions = () => {
    return {
        transactions: [
            {
                id: "01.25.0000012",
                amount: 120.01,
                currency: "TON",
                type: "deposit",
                status: "pending",
                date: "24.04.2025",
                time: "12:14"
            },
            {
                id: "01.25.0000013",
                amount: -3500.55,
                currency: "GTN",
                type: "withdrawal",
                status: "completed",
                date: "23.04.2025",
                time: "15:00"
            },
            {
                id: "01.25.0000014",
                amount: -15.00,
                currency: "TON",
                type: "deposit",
                status: "change",
                date: "24.04.2025",
                time: "12:14"
            },
            {
                id: "01.25.0000015",
                amount: 30.02,
                currency: "GTN",
                type: "withdrawal",
                status: "completed",
                date: "23.04.2025",
                time: "15:00"
            },
            {
                id: "01.25.0000016",
                amount: -15.00,
                currency: "TON",
                type: "deposit",
                status: "pending",
                date: "24.04.2025",
                time: "12:14"
            },
            {
                id: "01.25.0000017",
                amount: -129330.00,
                currency: "GTN",
                type: "change",
                status: "failed",
                date: "23.04.2025",
                time: "15:00"
            }
        ]
    };
};
