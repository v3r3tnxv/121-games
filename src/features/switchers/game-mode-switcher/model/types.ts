export type GameModeSwitcherOption = {
    label: string;
};

export interface GameModeSwitcherProps {
    options: GameModeSwitcherOption[];
    initialSelected?: string;
    content: Record<string, React.ReactNode>;
    className?: string;
}
