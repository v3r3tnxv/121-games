import { GameModeSwitcher } from '@/features/switchers/game-mode-switcher';
import { GamesList } from '@/widgets/games';
import styles from './Games.module.scss';

const GamesPage = () => {
    return (
        <div className={styles.games}>
            <h1 className={styles.title}>Игры</h1>

            <GameModeSwitcher
                className={styles.switcher}
                options={[{ label: 'Онлайн' }, { label: 'Оффлайн' }]}
                initialSelected="Онлайн"
                content={{
                    Онлайн: <GamesList mode="Онлайн" />,
                    Оффлайн: <GamesList mode="Оффлайн" />,
                }}
            />
        </div>
    );
};

export default GamesPage;
