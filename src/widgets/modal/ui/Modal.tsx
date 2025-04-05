"use client";
// Modal.tsx
import { useState, useEffect } from "react";
import { ModalBank } from './ModalBank';
import { ModalProps } from "../model/types"
import { useModal } from '../model/useModal';
import { ModalDailies } from './ModalDailies';
import { ModalDice } from './ModalDice';
import { ModalGame } from './ModalGame';
import { ModalHandWars } from './ModalHandWars';
import { ModalLeaderboard } from './ModalLeaderboard';
import { ModalReferral } from './ModalReferral';
import Image from 'next/image';
import styles from './Modal.module.scss';

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
            case 'bank_info': return <ModalBank />;
            case 'dailies_info': return <ModalDailies />;
            case 'dice_info': return <ModalDice />;
            case 'game_info': return <ModalGame />;
            case 'hand_wars_info': return <ModalHandWars />;
            case 'leaderboard_info': return <ModalLeaderboard />;
            case 'referral_info': return <ModalReferral />;
            default: return null;
        }
    };

    return (
        <div className={`${styles.overlay} ${className?.overlay} ${isClosing ? styles.closeAnimation : styles.openAnimation}`} onClick={handleClose}>
            <div className={`${styles.modal} ${className?.modal}`} onClick={(e) => e.stopPropagation()}>
                <button className={`${styles.closeBtn} ${className?.closeBtn}`} onClick={handleClose}>
                    <Image
                        className={styles.closeBtnIcon}
                        src={"/icons/close.svg"}
                        alt={"Закрыть"}
                        width={16}
                        height={16}
                    />
                </button>
                {renderContent()}
            </div>
        </div>
    );
};

