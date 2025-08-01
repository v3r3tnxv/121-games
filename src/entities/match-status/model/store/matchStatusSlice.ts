// entities/match-status/model/store/matchStatusSlice.ts
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as MatchStatusAPI from '../../api';
import { MatchStatus } from '../../model/types';

interface MatchStatusState {
    statuses: MatchStatus[];
    statusMap: Record<number, MatchStatus>; // Карта для быстрого поиска по ID
    loading: boolean;
    error: string | null;
}

const initialState: MatchStatusState = {
    statuses: [],
    statusMap: {},
    loading: false,
    error: null,
};

export const fetchAllStatuses = createAsyncThunk<MatchStatus[]>(
    'matchStatuses/fetchAll',
    async (_, { rejectWithValue }) => {
        try {
            return await MatchStatusAPI.getAllStatuses();
        } catch (err: any) {
            return rejectWithValue(
                err.response?.data?.message || err.message || 'Ошибка загрузки статусов'
            );
        }
    }
);

const matchStatusSlice = createSlice({
    name: 'matchStatuses',
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllStatuses.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAllStatuses.fulfilled, (state, action: PayloadAction<MatchStatus[]>) => {
                state.loading = false;
                state.statuses = action.payload;
                state.statusMap = action.payload.reduce(
                    (acc, status) => {
                        acc[status.id] = status;
                        return acc;
                    },
                    {} as Record<number, MatchStatus>
                );
            })
            .addCase(fetchAllStatuses.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const { clearError } = matchStatusSlice.actions;
export default matchStatusSlice.reducer;
