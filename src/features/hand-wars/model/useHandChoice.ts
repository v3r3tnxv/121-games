// // features/hand-wars/model/useHandChoice.ts
// import { useCallback, useEffect, useRef, useState } from 'react';
// import { getMatchResult } from '@/entities/match';
// import { makeMove } from '../api/makeMove';
// import type { HandType, Status } from './types';

// export function useHandChoice(matchId: number, playerId: number) {
//     const [status, setStatus] = useState<Status>('waiting');
//     const [message, setMessage] = useState<string | null>(null);
//     const [matchData, setMatchData] = useState<{ status: number; winnerId: number | null } | null>(
//         null
//     );
//     const intervalRef = useRef<number | null>(null);

//     const pollMatchStatus = useCallback(() => {
//         if (intervalRef.current) {
//             clearInterval(intervalRef.current);
//         }

//         intervalRef.current = window.setInterval(async () => {
//             try {
//                 const data = await getMatchResult(matchId);
//                 setMatchData(data);
//                 if (data.status === 4) {
//                     if (intervalRef.current) clearInterval(intervalRef.current);
//                     setStatus('finished');
//                     setMessage(`Победитель: ${data.winnerId === playerId ? 'Вы' : 'Оппонент'}`);
//                 }
//             } catch {
//                 if (intervalRef.current) clearInterval(intervalRef.current);
//                 setStatus('error');
//                 setMessage('Ошибка получения статуса матча');
//             }
//         }, 2000);
//     }, [matchId, playerId]);

//     const makePlayerMove = async (move: HandType) => {
//         try {
//             const res = await makeMove(matchId, playerId, move);
//             // Тип у res нужно уточнить, например { message: string }
//             setMessage((res as { message: string }).message);
//             setStatus('waiting');
//             pollMatchStatus();
//         } catch {
//             setStatus('error');
//             setMessage('Ошибка при отправке хода');
//         }
//     };

//     useEffect(() => {
//         pollMatchStatus();
//         return () => {
//             if (intervalRef.current) clearInterval(intervalRef.current);
//         };
//     }, [pollMatchStatus]);

//     return { status, message, matchData, makePlayerMove };
// }
