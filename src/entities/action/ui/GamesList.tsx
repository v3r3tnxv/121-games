'use client';

// entities/game/ui/GamesList.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Plate } from '@/shared/ui';
import { GameMode, games } from '../model';
import styles from './GamesList.module.scss';

export const GamesList = ({ mode }: { mode: GameMode }) => {
    const filteredGames = games.filter((game) => game.modes.includes(mode));

    return (
        <div className={styles.gameList}>
            {filteredGames.map((game, i) => (
                <Link href={game.href} key={i} className={styles.link}>
                    <Plate className={styles.plate}>
                        {game.icons.map((icon, j) => (
                            <Image
                                key={j}
                                className={styles.icon}
                                src={icon.src}
                                alt={icon.alt}
                                width={icon.width}
                                height={icon.height}
                                priority
                            />
                        ))}
                        <span className={styles.label}>{game.label}</span>
                    </Plate>
                </Link>
            ))}
        </div>
    );
};
