"use client"

import { Plate, InfoButton, Timer, Button } from "@/shared/ui";
import { useModal } from "@/widgets/modal";
import Image from 'next/image';
import styles from "./Dailies.module.scss";
import { ReferralLink } from "@/widgets/referral-link";

const DailiesPage = () => {
    const { openModal } = useModal();

    const handleClick = () => {
        openModal('dailies_info');
    };

    return (
        <div className={styles.dailies}>
            <Plate className={styles.dailies__header} rounded="full">
                <Timer />
                <InfoButton onClick={handleClick} />
            </Plate>

            <Image
                className={styles.dailies__chest}
                src={"/images/chest-closed.png"}
                alt={"Копировать"}
                width={213}
                height={213}
            />

            <Button label={"Забрать"} className={styles.dailies__claim} />

            <p className={styles.dailies__invite}>Пригласить друга</p>
            <ReferralLink />

            <h2 className={styles.dailies__title}>Ежедневные задания</h2>

            <Plate className={styles.dailies__quest} rounded="full">
                <Image
                    src={"/icons/crypto.svg"}
                    alt={""}
                    width={24}
                    height={0}
                />
                Дать леща
                <Image
                    src={"/icons/action.svg"}
                    alt={""}
                    width={36}
                    height={0}
                />
            </Plate>

            <Plate className={styles.dailies__quest} rounded="full">
                <Image
                    src={"/icons/crypto.svg"}
                    alt={""}
                    width={24}
                    height={0}
                />
                Сломать колени
                <Image
                    src={"/icons/complete.svg"}
                    alt={""}
                    width={36}
                    height={0}
                />
            </Plate>

            <Plate className={styles.dailies__quest} rounded="full">
                <Image
                    src={"/icons/crypto.svg"}
                    alt={""}
                    width={24}
                    height={0}
                />
                Дать леща
                <Image
                    src={"/icons/complete.svg"}
                    alt={""}
                    width={36}
                    height={0}
                />
            </Plate>
        </div>
    );
};

export default DailiesPage;
