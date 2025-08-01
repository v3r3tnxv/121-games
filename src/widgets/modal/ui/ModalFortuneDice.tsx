// src/widgets/modal/ui/ModalBank.tsx
import styles from './ModalText.module.scss';

export const ModalFortuneDice = () => {
    return (
        <>
            <h2 className={styles.title}>Камень - ножницы - бумага</h2>
            <p className={styles.text}>
                <span>Игра на двоих: каждый бросает кость по нажатию кнопки.</span>
                <span>Побеждает тот, у кого выпало большее число.</span>
                <span>Если выпали одинаковые числа — ничья.</span>
            </p>
        </>
    );
};
