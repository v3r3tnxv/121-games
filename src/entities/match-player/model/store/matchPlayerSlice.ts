// entities/match-player/model/store/matchPlayerSlice.ts
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as MatchPlayerAPI from '../../api';
import { MatchPlayer } from '../../model/types';

interface MatchPlayerState {
    playersByMatchId: Record<number, MatchPlayer[]>; // Кэшируем по match_id
    currentPlayer: MatchPlayer | null;
    loading: boolean;
    error: string | null;
}

const initialState: MatchPlayerState = {
    playersByMatchId: {},
    currentPlayer: null,
    loading: false,
    error: null,
};

export const fetchPlayersByMatchId = createAsyncThunk<MatchPlayer[], number>(
    'matchPlayers/fetchByMatchId',
    async (matchId, { rejectWithValue }) => {
        try {
            return await MatchPlayerAPI.getPlayersByMatchId(matchId);
        } catch (err: any) {
            return rejectWithValue(
                err.response?.data?.message || err.message || 'Ошибка загрузки игроков'
            );
        }
    }
);

export const addPlayerToMatchAsync = createAsyncThunk<
    MatchPlayer,
    Parameters<typeof MatchPlayerAPI.addPlayerToMatch>[0]
>('matchPlayers/add', async (data, { rejectWithValue }) => {
    try {
        return await MatchPlayerAPI.addPlayerToMatch(data);
    } catch (err: any) {
        return rejectWithValue(
            err.response?.data?.message || err.message || 'Ошибка добавления игрока'
        );
    }
});

export const deletePlayerAsync = createAsyncThunk<void, number>(
    'matchPlayers/delete',
    async (id, { rejectWithValue }) => {
        try {
            await MatchPlayerAPI.deletePlayer(id);
        } catch (err: any) {
            return rejectWithValue(
                err.response?.data?.message || err.message || 'Ошибка удаления игрока'
            );
        }
    }
);

const matchPlayerSlice = createSlice({
    name: 'matchPlayers',
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPlayersByMatchId.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                fetchPlayersByMatchId.fulfilled,
                (state, action: PayloadAction<MatchPlayer[]>) => {
                    state.loading = false;
                    // Предполагаем, что данные приходят с полем match_id
                    if (action.payload.length > 0) {
                        const matchId = action.payload[0].match_id;
                        state.playersByMatchId[matchId] = action.payload;
                    }
                }
            )
            .addCase(fetchPlayersByMatchId.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(
                addPlayerToMatchAsync.fulfilled,
                (state, action: PayloadAction<MatchPlayer>) => {
                    const matchId = action.payload.match_id;
                    if (!state.playersByMatchId[matchId]) {
                        state.playersByMatchId[matchId] = [];
                    }
                    state.playersByMatchId[matchId].push(action.payload);
                }
            )
            .addCase(addPlayerToMatchAsync.rejected, (state, action) => {
                state.error = action.payload as string;
            })
            .addCase(deletePlayerAsync.fulfilled, (state, action) => {
                // Нужно знать match_id для удаления из кэша. Можно передавать в meta
                // Пока просто очищаем кэш для этого игрока (если ID уникальны)
                // Лучше: передавать matchId в thunk
                Object.keys(state.playersByMatchId).forEach((matchIdStr) => {
                    const matchId = parseInt(matchIdStr, 10);
                    state.playersByMatchId[matchId] = state.playersByMatchId[matchId].filter(
                        (p) => p.id !== action.meta.arg
                    );
                });
            })
            .addCase(deletePlayerAsync.rejected, (state, action) => {
                state.error = action.payload as string;
            });
    },
});

export const { clearError } = matchPlayerSlice.actions;
export default matchPlayerSlice.reducer;
