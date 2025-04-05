import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks/redux';
import { openModal, closeModal, ModalState } from './modalSlice';
import { ModalType } from './types';

export const useModal = () => {
    const dispatch = useAppDispatch();
    const modal = useAppSelector((state: { modal: ModalState }) => state.modal); // Типизируем state

    return {
        ...modal,
        openModal: (type: ModalType, data?: any) => dispatch(openModal({ type, data })), // Передаем объект
        closeModal: () => dispatch(closeModal()),
    };
};
