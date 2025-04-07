import { PlateProps } from './types';
import styles from "./Plate.module.scss";

export const Plate = ({ className, children }: PlateProps) => {
    return (
        <div className={`${styles.plate} ${className}`}>
            {children}
        </div>
    );
};
