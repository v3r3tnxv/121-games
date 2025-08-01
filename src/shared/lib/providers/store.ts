// app/providers/store.ts
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '@/entities/user/model/store/userSlice';
import { modalReducer } from '@/widgets/modal';

export const store = configureStore({
    reducer: {
        modal: modalReducer,
        user: userReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
