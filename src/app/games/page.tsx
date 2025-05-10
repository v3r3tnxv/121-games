"use client"

import { Plate, InfoButton, Timer, Button } from "@/shared/ui";
import styles from "./Games.module.scss";

const GamesPage = () => {

    return (
        <div className={styles.games}>
            <Button label={"Битва рук"} className={styles.btn} />
            <Button label={"Кости"} className={styles.btn} />
        </div>
    );
};

export default GamesPage;
