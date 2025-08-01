// entities/user/model/api/store/userSlice.ts
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProfile } from '../../api/getProfile';
import { User } from '../types';

interface UserState {
    user: User | null;
    loading: boolean;
    error: string | null;
}

const initialState: UserState = {
    user: null,
    loading: false,
    error: null,
};

// Асинхронный thunk для загрузки профиля
export const fetchUserProfile = createAsyncThunk<User, number, { rejectValue: string }>(
    'user/fetchUserProfile',
    async (telegramId, thunkAPI) => {
        try {
            const data = await getProfile(telegramId);
            return data;
        } catch (error: unknown) {
            if (error instanceof Error) {
                return thunkAPI.rejectWithValue(error.message);
            }

            return thunkAPI.rejectWithValue('Неизвестная ошибка');
        }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        clearUser(state) {
            state.user = null;
            state.error = null;
            state.loading = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserProfile.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUserProfile.fulfilled, (state, action: PayloadAction<User>) => {
                state.user = action.payload;
                state.loading = false;
            })
            .addCase(fetchUserProfile.rejected, (state, action) => {
                state.error = action.payload as string;
                state.loading = false;
            });
    },
});

export const { clearUser } = userSlice.actions;
export default userSlice.reducer;
