export type TaskStatus = '' | 'secondary';

export interface DailyTaskProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    children?: React.ReactNode;
    status: TaskStatus;
    className?: string;
}