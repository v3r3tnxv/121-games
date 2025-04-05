export interface ModalProps {
    // isOpen: boolean;
    // children: React.ReactNode;
    // onClose: () => void;
    className?: {
        overlay?: string;
        modal?: string;
        closeBtn?: string;
    };
}

export type ModalType =
    | 'bank_info'
    | 'dailies_info'
    | 'dice_info'
    | 'game_info'
    | 'hand_wars_info'
    | 'leaderboard_info'
    | 'referral_info'
    | null;
