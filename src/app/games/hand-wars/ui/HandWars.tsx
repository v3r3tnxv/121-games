// 'use client';

// // app/games/hand-wars/ui/HandWars.tsx
// import Image from 'next/image';
// import clsx from 'clsx';
// import { HandMove } from '@/features/hand-move';
// import { HandPaper } from '@/shared/assets/icons/HandPaper';
// import { InfoButton, Plate, Timer } from '@/shared/ui';
// import { useModal } from '@/widgets/modal';
// import type { HandWarsProps } from '../model/types';
// import styles from './HandWars.module.scss';

// export default function HandWars({ user }: HandWarsProps) {
//     const { openModal } = useModal();

//     return (
//         <div className={styles.handWars}>
//             <h1 className={styles.title}>Банк</h1>

//             <Plate className={styles.bankPlate} rounded="full">
//                 <Image
//                     className={clsx(styles.bankIcon)}
//                     src="/images/gamepad.svg"
//                     alt="gamepad"
//                     width={96}
//                     height={96}
//                     priority
//                 />
//                 <span className={styles.bankAmount}>1.9 TON</span>
//                 <InfoButton className={styles.bankInfo} onClick={() => openModal('bank_info')} />
//             </Plate>

//             <Plate className={styles.handPlate}>
//                 <HandPaper className={styles.handIcon} />
//             </Plate>

//             <div className={styles.opponentInfo}>
//                 <span className={styles.nickname}>{user.username}</span>
//                 <span className={styles.username}>@{user.username}</span>
//             </div>

//             <Plate className={styles.Timerplate}>
//                 <Image
//                     className={styles.icon}
//                     src="/images/clock.png"
//                     alt="rock"
//                     width={48}
//                     height={48}
//                     priority
//                 />
//                 <Timer className={styles.timer} />
//             </Plate>

//             <div className={styles.userInfo}>
//                 <span className={styles.nickname}>{user.username}</span>
//                 <span className={styles.username}>@{user.username}</span>
//             </div>

//             <HandChoice />

//             <div className={styles.matchInfo}>
//                 <p className={styles.infoText}>
//                     Отложеный матч <br />
//                     со случайным соперником
//                 </p>
//                 <InfoButton onClick={() => openModal('game_info')} />
//             </div>
//         </div>
//     );
// }
