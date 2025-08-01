import { Plate } from '@/shared/ui/plate';
import styles from './Card.module.scss';
import { CardProps } from './types';

export const Card = ({ children }: CardProps) => {
    return (
        <div className={styles.card}>
            <Plate>{children}</Plate>
        </div>
    );
};
