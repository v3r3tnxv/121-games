import clsx from 'clsx';
import styles from './Plate.module.scss';
import { PlateProps } from './types';

export const Plate = ({ className, children, rounded = 'normal' }: PlateProps) => {
    const roundedClass = styles[`plate--${rounded}`];

    return <div className={clsx(styles.plate, roundedClass, className)}>{children}</div>;
};
