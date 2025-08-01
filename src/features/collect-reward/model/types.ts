export interface CollectButtonProps {
    userId: number;
    className?: string;
    onSuccess?: (res: { nextRewardAvailableAt: number | null }) => void;
}

export interface RewardChestProps {
    nextRewardAvailableAt: number | null;
}

export type RewardTimerProps = {
    className?: string;
    nextRewardAvailableAt: number | null;
};
