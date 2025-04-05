import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/app/providers/store";

interface SwitcherState {
    selected: Record<string, string>; // Храним состояния для нескольких свитчеров
}

const initialState: SwitcherState = {
    selected: {},
};

const switcherSlice = createSlice({
    name: "switcher",
    initialState,
    reducers: {
        setInitial: (state, action: PayloadAction<{ id: string; value: string }>) => {
            if (!state.selected[action.payload.id]) {
                state.selected[action.payload.id] = action.payload.value;
            }
        },
        switchTo: (state, action: PayloadAction<{ id: string; value: string }>) => {
            state.selected[action.payload.id] = action.payload.value;
        },
    },
});

export const { setInitial, switchTo } = switcherSlice.actions;
export const selectSelected = (id: string) => (state: RootState) => state.switcher.selected[id] || "";
export const switcherReducer = switcherSlice.reducer;

