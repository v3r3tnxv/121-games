// src/widgets/modal/ui/ModalBank.tsx
import styles from "./ModalText.module.scss";

export const ModalReferral = () => {
    return (
        <>
            <h2 className={styles.title}>Рефераллы</h2>
            <p className={styles.text}>
                <span>Зови друзей и получай награду за каждого!</span>
                <span>Начислим на твой баланс по 20 $GMT за каждого приглашенного друга.</span>
                <span>Награда придет после того, как друг сыграет в одну игру.</span>
            </p>
        </>
    );
};
