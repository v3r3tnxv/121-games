// src/widgets/modal/ui/ModalBank.tsx
import styles from "./ModalText.module.scss";

export const ModalBank = () => {
    return (
        <>
            <h2 className={styles.title}>Банк игры</h2>
            <p className={styles.text}>
                <span>Банк состоит из ставок двух игроков, которые приняли участие в игре.</span>
                <span>Победитель забирает весь банк, за вычетом 5% комиссии.</span>
                <span>Эти средства идут на поддержку игры и её развитие.</span>
                <span>Следите за текущими результатами, чтобы понять, кто выйдет победителем.</span>
            </p>
        </>
    );
};
