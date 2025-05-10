import { PlateProps } from './types';
import styles from "./Plate.module.scss";

export const Plate = ({ className, children, rounded = "normal" }: PlateProps) => {
    const roundedClass = styles[`plate--${rounded}`];

    return (
        <div className={`${styles.plate} ${roundedClass} ${className}`}>
            {children}
        </div>
    );
};
