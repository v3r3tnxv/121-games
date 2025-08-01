'use client';

// app/games/hand-wars/ui/HandWars.tsx
import { useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { HandPaper, HandRock, HandScissors } from '@/shared/assets/icons';
import { Button, InfoButton, Plate, Timer } from '@/shared/ui';
import { useModal } from '@/widgets/modal';
import type { HandWarsProps } from '../model/types';
import styles from './HandWars.module.scss';

type HandType = 'rock' | 'paper' | 'scissors';

const icons = {
    rock: HandRock,
    paper: HandPaper,
    scissors: HandScissors,
} satisfies Record<HandType, React.FC<{ className?: string }>>;

const options = Object.keys(icons) as HandType[];

export function HandWarsWidget({ user }: HandWarsProps) {
    const { openModal } = useModal();
    const [selected, setSelected] = useState<HandType | null>(null);

    const handleChoose = () => {
        if (!selected) return;
        // Здесь будет логика отправки выбора
        console.log('Выбрано:', selected);
    };

    return (
        <div className={styles.handWars}>
            <h1 className={styles.title}>Банк</h1>

            <Plate className={styles.bankPlate} rounded="full">
                <Image
                    className={clsx(styles.bankIcon)}
                    src="/images/gamepad.svg"
                    alt="gamepad"
                    width={96}
                    height={96}
                    priority
                />
                <span className={styles.bankAmount}>1.9 TON</span>
                <InfoButton className={styles.bankInfo} onClick={() => openModal('bank_info')} />
            </Plate>

            <Plate className={styles.handPlate}>
                <HandPaper className={styles.handIcon} />
            </Plate>

            <div className={styles.opponentInfo}>
                {user ? (
                    <>
                        <span className={styles.nickname}>{user.username}</span>
                        <span className={styles.username}>@{user.username}</span>
                    </>
                ) : (
                    <>
                        <span className={styles.nickname}>Гость</span>
                        <span className={styles.username}>@guest</span>
                    </>
                )}
            </div>

            <Plate className={styles.Timerplate}>
                <Image
                    className={styles.icon}
                    src="/images/clock.png"
                    alt="rock"
                    width={48}
                    height={48}
                    priority
                />
                <Timer className={styles.timer} />
            </Plate>

            <div className={styles.userInfo}>
                {user ? (
                    <>
                        <span className={styles.nickname}>{user.username}</span>
                        <span className={styles.username}>@{user.username}</span>
                    </>
                ) : (
                    <>
                        <span className={styles.nickname}>Гость</span>
                        <span className={styles.username}>@guest</span>
                    </>
                )}
            </div>

            {/* 👇 Верстка из HandChoice */}
            <Plate className={styles.plate}>
                {options.map((type) => {
                    const Icon = icons[type];
                    const isSelected = selected === type;

                    return (
                        <button
                            key={type}
                            onClick={() => setSelected(type)}
                            className={clsx(styles.button, isSelected && styles.active)}
                        >
                            {isSelected ? (
                                <Image
                                    className={styles.icon}
                                    src={`/images/hands/hand-${type}-noshadow.svg`}
                                    alt={type}
                                    width={64}
                                    height={64}
                                    priority
                                />
                            ) : (
                                <Icon className={styles.icon} />
                            )}
                        </button>
                    );
                })}
            </Plate>

            <div className={styles.action}>
                <Button
                    className={styles.chooseButton}
                    label="Выбрать"
                    disabled={!selected}
                    onClick={handleChoose}
                />
                <InfoButton onClick={() => openModal('hand_wars_info')} />
            </div>

            <div className={styles.matchInfo}>
                <p className={styles.infoText}>
                    Отложеный матч <br />
                    со случайным соперником
                </p>
                <InfoButton onClick={() => openModal('game_info')} />
            </div>
        </div>
    );
}
