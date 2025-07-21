export type HistorySwitcherOption = {
    label: string;
};

export interface HistorySwitcherProps {
    options: HistorySwitcherOption[];
    initialSelected?: string;
    content: Record<string, React.ReactNode>;
    className?: string;
}
