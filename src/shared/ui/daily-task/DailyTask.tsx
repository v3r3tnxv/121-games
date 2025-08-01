import { Plate } from '@/shared/ui/plate';
import styles from './DailyTask.module.scss';
import { DailyTaskProps } from './types';

export const DailyTask = ({ children }: DailyTaskProps) => {
    return (
        <div className={styles.dailyTask}>
            <Plate>{children}</Plate>
        </div>
    );
};
