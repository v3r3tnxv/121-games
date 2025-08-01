// src/shared/ui/timer/timer.tsx
// import styles from './Timer.module.scss';
import { TimerProps } from './types';

export const Timer = ({ className }: TimerProps) => {
    return <div className={className}>00:23:00</div>;
};
