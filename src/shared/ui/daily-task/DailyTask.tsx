import { Plate } from "@/shared/ui/plate";
import { DailyTaskProps } from './types';
import styles from "./DailyTask.module.scss";

export const DailyTask = ({ children }: DailyTaskProps) => {

    return (
        <div className={styles.dailytask}>
            <Plate>
                {children}
            </Plate>
        </div>
    );
};
