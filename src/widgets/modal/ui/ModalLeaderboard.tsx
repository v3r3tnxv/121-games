// src/widgets/modal/ui/ModalBank.tsx
import styles from "./ModalText.module.scss";

export const ModalLeaderboard = () => {
    return (
        <>
            <h2 className={styles.title}>Рейтинговая таблица</h2>
            <p className={styles.text}>
                <span>Выигрывай и будь первым!</span>
                <span>В таблице отображаются игроки с самым большим количеством побед.</span>
            </p>
        </>
    );
};
