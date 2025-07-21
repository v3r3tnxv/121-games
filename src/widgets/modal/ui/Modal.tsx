'use client';

// Modal.tsx
import { useEffect, useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { ModalProps } from '../model/types';
import { useModal } from '../model/useModal';
import styles from './Modal.module.scss';
import { ModalBank } from './ModalBank';
import { ModalDailies } from './ModalDailies';
import { ModalFortuneDice } from './ModalFortuneDice';
import { ModalGame } from './ModalGame';
import { ModalHandWars } from './ModalHandWars';
import { ModalLeaderboard } from './ModalLeaderboard';
import { ModalReferral } from './ModalReferral';

export const Modal: React.FC<ModalProps> = ({ className }) => {
    const { isOpen, modalType, closeModal } = useModal();

    const [isMounted, setIsMounted] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
            setIsClosing(false);
        }
    }, [isOpen]);

    // Запрещаем скролл за открытой модалкой
    useEffect(() => {
        if (isMounted) {
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isMounted]);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            closeModal();
            setIsMounted(false);
        }, 300);
    };

    if (!isMounted) return null;

    const renderContent = () => {
        switch (modalType) {
            case 'bank_info':
                return <ModalBank />;
            case 'dailies_info':
                return <ModalDailies />;
            case 'fortune_dice_info':
                return <ModalFortuneDice />;
            case 'game_info':
                return <ModalGame />;
            case 'hand_wars_info':
                return <ModalHandWars />;
            case 'leaderboard_info':
                return <ModalLeaderboard />;
            case 'referral_info':
                return <ModalReferral />;
            default:
                return null;
        }
    };

    return (
        <div
            className={clsx(
                styles.overlay,
                className?.overlay,
                isClosing ? styles.closeAnimation : styles.openAnimation
            )}
            onClick={handleClose}
        >
            <div
                className={clsx(styles.modal, className?.modal)}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className={clsx(styles.closeButton, className?.closeButton)}
                    onClick={handleClose}
                >
                    <Image
                        className={styles.icon}
                        src={'/icons/close.svg'}
                        alt={'Закрыть'}
                        width={16}
                        height={16}
                    />
                </button>
                {renderContent()}
            </div>
        </div>
    );
};
