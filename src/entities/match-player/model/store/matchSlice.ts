// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { Match } from '../types'; // Импортируем тип Match

// interface MatchState {
//     // Описание структуры состояния
//     matches: Match[]; // Структура состояния - массив объектов Match
// }

// const initialState: MatchState = {
//     matches: [], // Инициализация состояния (пустой массив)
// };

// const matchSlice = createSlice({
//     name: 'match', // Название слайса
//     initialState, // Начальное состояние
//     reducers: {
//         setMatch(state, action: PayloadAction<Match[]>) {
//             state.matches = action.payload; // Устанавливаем новое состояние match
//         },
//     },
// });

// export const { setMatch } = matchSlice.actions;
// export default matchSlice.reducer;
