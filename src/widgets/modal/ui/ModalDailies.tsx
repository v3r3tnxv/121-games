// src/widgets/modal/ui/ModalBank.tsx
import styles from "./ModalText.module.scss";

export const ModalDailies = () => {
    return (
        <>
            <h2 className={styles.title}>Ежедневные награды</h2>
            <p className={styles.text}>
                <span>Захордите в игру каждый день и получайте ценные награды!</span>
                <span>Таймер обновляется каждые 23 часа.</span>
            </p>
        </>
    );
};
