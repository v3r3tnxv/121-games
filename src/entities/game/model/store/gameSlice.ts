import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Game } from "../types";  // Импортируем тип Game

interface GameState {  // Описание структуры состояния
    games: Game[];    // Структура состояния - массив объектов Game
}

const initialState: GameState = {
    games: [],  // Инициализация состояния (пустой массив)
};

const gameSlice = createSlice({
    name: "games",  // Название слайса
    initialState,    // Начальное состояние
    reducers: {
        setGames(state, action: PayloadAction<Game[]>) {
            state.games = action.payload;  // Устанавливаем новое состояние games
        },
    },
});

export const { setGames } = gameSlice.actions;
export default gameSlice.reducer;
