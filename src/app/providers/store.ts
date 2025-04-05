import { configureStore } from "@reduxjs/toolkit";
import { switcherReducer } from "@/features/switcher";
import { modalReducer } from '@/widgets/modal';

export const store = configureStore({
    reducer: {
        switcher: switcherReducer,
        modal: modalReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
