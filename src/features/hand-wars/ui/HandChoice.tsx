// 'use client';

// // features/hand-choice/ui/HandChoice.tsx
// import Image from 'next/image';
// import clsx from 'clsx';
// import { HandPaper, HandRock, HandScissors } from '@/shared/assets/icons';
// import { Button, InfoButton, Plate } from '@/shared/ui';
// import { useModal } from '@/widgets/modal';
// import { HandType, useHandChoice } from '../model';
// import styles from './HandChoice.module.scss';

// const icons = {
//     rock: HandRock,
//     paper: HandPaper,
//     scissors: HandScissors,
// } satisfies Record<HandType, React.FC<{ className?: string }>>;

// const options = Object.keys(icons) as HandType[];

// export const HandChoice = () => {
//     const { selected, setSelected } = useHandChoice();
//     const { openModal } = useModal();

//     return (
//         <>
//             <Plate className={styles.plate}>
//                 {options.map((type) => {
//                     const Icon = icons[type];
//                     const isSelected = selected === type;

//                     return (
//                         <button
//                             key={type}
//                             onClick={() => setSelected(type)}
//                             className={clsx(styles.button, isSelected && styles.active)}
//                         >
//                             {isSelected ? (
//                                 <Image
//                                     className={styles.icon}
//                                     src={`/images/hands/hand-${type}-noshadow.svg`}
//                                     alt={type}
//                                     width={64}
//                                     height={64}
//                                     priority
//                                 />
//                             ) : (
//                                 <Icon className={styles.icon} />
//                             )}
//                         </button>
//                     );
//                 })}
//             </Plate>

//             <div className={styles.action}>
//                 <Button className={styles.chooseButton} label="Выбрать" disabled={!selected} />
//                 <InfoButton onClick={() => openModal('fortune_dice_info')} />
//             </div>
//         </>
//     );
// };
