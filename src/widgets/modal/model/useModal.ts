import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/redux';
import { ModalState, closeModal, openModal } from './modalSlice';
import { ModalType } from './types';

export const useModal = () => {
    const dispatch = useAppDispatch();
    const modal = useAppSelector((state: { modal: ModalState }) => state.modal);

    return {
        ...modal,
        openModal: (type: ModalType, data?: unknown) => dispatch(openModal({ type, data })),
        closeModal: () => dispatch(closeModal()),
    };
};
