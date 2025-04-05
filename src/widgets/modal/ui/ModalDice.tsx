// src/widgets/modal/ui/ModalBank.tsx
import styles from "./ModalText.module.scss";

export const ModalDice = () => {
    return (
        <>
            <h2 className={styles.title}>Камень - ножницы - бумага</h2>
            <p className={styles.text}>
                <span>Игра для двух игроков.</span>
                <span>Каждый игрок кидает игральную кость, и тот, у кого выпало большее число, выигрывает.</span>
                <span>Каждый игрок нажимает кнопку, чтобы кинуть свою кость.</span>
                <span>Если оба игрока получают одинаковое число, то это ничья..</span>
            </p>
        </>
    );
};
