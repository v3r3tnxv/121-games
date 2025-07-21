// modalSlice.ts
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ModalType } from './types';

export interface ModalState {
    isOpen: boolean;
    modalType: ModalType;
    modalData?: unknown;
}

export const initialState: ModalState = {
    isOpen: false,
    modalType: null,
    modalData: null,
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action: PayloadAction<{ type: ModalType; data?: unknown }>) => {
            state.isOpen = true;
            state.modalType = action.payload.type;
            state.modalData = action.payload.data;
        },
        closeModal: (state) => {
            state.isOpen = false;
            state.modalType = null;
            state.modalData = undefined;
        },
    },
});

export const { openModal, closeModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
