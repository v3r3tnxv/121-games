export type SwitcherProps = {
    id: string;
    options: { label: string }[]; // Кнопки
    className?: string;
    content: Record<string, React.ReactNode>; // Контент по ключу
    initialSelected?: string;
    onSelect?: (label: string) => void;
};
