// src/widgets/modal/ui/ModalBank.tsx
import styles from "./ModalText.module.scss";

export const ModalHandWars = () => {
    return (
        <>
            <h2 className={styles.title}>Камень - ножницы - бумага</h2>
            <p className={styles.text}>
                <span>Игра для двух игроков.</span>
                <span>Оба игрока одновременно выбирают один из трёх вариантов: Камень (✊) Ножницы (✌️) Бумага (✋)</span>
                <span>Победитель определяется по правилам:<br />
                    Камень ломает ножницы — камень побеждает ножницы<br />
                    Ножницы режут бумагу — ножницы побеждают бумагу<br />
                    Бумага накрывает камень — бумага побеждает камень<br />
                    Одинаковый символ — ничья
                </span>
            </p>
        </>
    );
};
