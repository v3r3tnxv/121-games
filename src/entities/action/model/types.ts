// entities/action/model/types.ts
export interface Action {
    id: number;
    matchId: number;
    playerId: number;
    playerRole: string;
    actionData: object;
    createdAt: string;
    updatedAt: string;
}
