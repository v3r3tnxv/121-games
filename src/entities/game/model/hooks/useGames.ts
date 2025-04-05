// Бизнес-логика профиля
export const useGames = () => {
    return {
        games: [
            {
                id: "02.25.0002312",
                amount: 12.01,
                currency: "TON",
                type: "deposit",
                status: "pending",
                date: "02.04.2025",
                time: "12:14"
            },
            {
                id: "02.25.0003413",
                amount: -300.75,
                currency: "GTN",
                type: "withdrawal",
                status: "completed",
                date: "13.04.2025",
                time: "15:00"
            },
            {
                id: "02.25.0003414",
                amount: -5.00,
                currency: "TON",
                type: "deposit",
                status: "change",
                date: "04.04.2025",
                time: "12:14"
            },
            {
                id: "02.25.0005415",
                amount: 370.02,
                currency: "GTN",
                type: "withdrawal",
                status: "completed",
                date: "23.04.2025",
                time: "15:00"
            },
            {
                id: "01.25.0007216",
                amount: -1.00,
                currency: "TON",
                type: "deposit",
                status: "pending",
                date: "21.04.2025",
                time: "12:14"
            },
            {
                id: "02.25.0008817",
                amount: -12930.07,
                currency: "GTN",
                type: "change",
                status: "failed",
                date: "20.05.2025",
                time: "15:00"
            }
        ]
    };
};
