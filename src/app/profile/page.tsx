"use client"

import { UserAvatar, useProfile } from "@/entities/user";
import { Button, Plate } from "@/shared/ui";
import Image from "next/image";
import { Switcher } from "@/features/switcher";
import { ReferralLink } from "@/widgets/referral-link";
import { TransactionHistory } from "@/widgets/transaction-history";
import { GameHistory } from "@/widgets/game-history";
import "./Profile.scss"

const ProfilePage = () => {
    const { user } = useProfile();

    // Опции для свитчера
    const currencyOptions = [
        { label: "GTN" },
        { label: "TON" },
    ];

    const currencyContent = {
        GTN: (
            <Plate>
                <span className="profile__balance-amount">{user.gtnBalance} GTN</span>
                <span className="profile__currency-dollar">$100.00</span>
                <Image src="/coins/gtn.svg" alt="GTN token" width={120} height={120} />
            </Plate>
        ),
        TON: (
            <Plate>
                <span className="profile__balance-amount">{user.tonBalance} TON</span>
                <span className="profile__currency-dollar">$20.00</span>
                <Image src="/coins/ton.svg" alt="TON" width={120} height={120} />
            </Plate>
        ),
    };

    const historyOptions = [
        { label: "История игр" },
        { label: "История платежей" },
    ];

    const historyContent = {
        "История игр": (
            <TransactionHistory>
            </TransactionHistory>
        ),
        "История платежей": (
            <GameHistory>
            </GameHistory>
        ),
    };

    return (
        <div className="profile">
            <section className="profile__header">
                <UserAvatar className="profile__avatar" />
                <span className="profile__nickname">{user.nickname}</span>
                <span className="profile__username">@{user.username}</span>
            </section>

            <section className="profile__balance">
                <Switcher className="profile__currency-switcher" id="currencySwitcher" options={currencyOptions} content={currencyContent} />

                <div className="profile__balance-actions">
                    <Button className="action-button" label="Пополнить">
                        <Image className="action-button__icon" src={"/icons/arrow.svg"} alt={"Пополнить"} width={16} height={16} />
                    </Button>

                    <Button className="action-button" label="Вывести">
                        <Image className="action-button__icon action-button__icon--withdrawal" src={"/icons/arrow.svg"} alt={"Вывести"} width={16} height={16} />
                    </Button>

                    <Button className="action-button" label="Обменять">
                        <Image className="action-button__icon action-button__icon--change" src={"/icons/double-arrow.svg"} alt={"Обменять"} width={16} height={16} />
                    </Button>
                </div>
            </section>

            <section className="profile__referrals">
                <span className="profile__referrals-amount">Рефераллы: {user.referrals}</span>
                <ReferralLink />
            </section>

            <section className="profile__history">
                <p className="profile__history-title">Последние действия</p>
                <Switcher className="profile__history-switcher" id="historySwitcher" options={historyOptions} content={historyContent} />
            </section>
        </div >
    );
};

export default ProfilePage;