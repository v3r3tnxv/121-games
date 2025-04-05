// src/widgets/modal/ui/ModalBank.tsx
import styles from "./ModalText.module.scss";

export const ModalGame = () => {
    return (
        <>
            <h2 className={styles.title}>Отложенный матч со случайным соперником</h2>
            <p className={styles.text}>
                <span>У игроков есть 5 минут чтобы сделать свой ход.</span>
            </p>
        </>
    );
};
