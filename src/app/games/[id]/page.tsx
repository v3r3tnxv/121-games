// src/app/games/[id]/page.tsx
import { notFound } from 'next/navigation';
import { getGameById } from '@/entities/game/api/game.api';
import { getProfile } from '@/entities/user/api/getProfile';
import type { User } from '@/entities/user/model/types';
import { FortuneDiceWidget } from '@/widgets/fortune-dice';
import { HandWarsWidget } from '@/widgets/hand-wars';

interface GamePageProps {
    params: { id: string };
}

const GamePage: React.FC<GamePageProps> = async ({ params }) => {
    const { id } = await params;
    const gameId = parseInt(id, 10);

    if (isNaN(gameId)) {
        notFound();
    }

    // Получаем данные пользователя (как в ваших текущих страницах)
    let user: User | null = null;
    try {
        const telegramId = Number(process.env.NEXT_PUBLIC_TELEGRAM_ID);
        if (!isNaN(telegramId)) {
            user = await getProfile(telegramId);
        }
    } catch (error) {
        console.error('Не удалось загрузить профиль пользователя:', error);
        // Можно продолжить без пользователя или показать ошибку
    }

    try {
        // Получаем данные игры по ID
        const game = await getGameById(gameId);

        // Определяем, какой виджет рендерить
        // Предположим, у объекта Game есть поле `name` или вы можете добавить `type`
        let gameWidget;
        switch (
            game.name?.toLowerCase() // или game.type
        ) {
            case 'fortune dice':
                gameWidget = <FortuneDiceWidget game={game} user={user} />;
                break;
            case 'hands war':
                gameWidget = <HandWarsWidget game={game} user={user} />;
                break;
            // Добавьте кейсы для других игр
            default:
                // Можно отрендерить универсальный компонент или выдать ошибку
                console.warn(`Неизвестный тип игры: ${game.name}`);
                gameWidget = <div>Игра {game.name} пока не поддерживается.</div>;
            // или notFound();
        }

        return (
            <div>
                {/* Опционально: общая обертка, заголовок, описание из game */}
                {/* <h1>{game.name}</h1>
        <p>{game.description}</p> */}
                {/* Рендерим выбранный виджет. Виджет сам отвечает за весь UI. */}
                {gameWidget}
            </div>
        );
    } catch (error) {
        console.error('Ошибка при загрузке игры:', error);
        notFound();
    }
};

export default GamePage;
