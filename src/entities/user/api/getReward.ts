// entities/user/model/api/getReward.ts

export const getReward = async (userId: number) => {
    const response = await fetch('http://localhost:8080/v1/user/collect-reward', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId }),
    });

    if (!response.ok) throw new Error('Ошибка при получении награды');
    return response.json();
};
