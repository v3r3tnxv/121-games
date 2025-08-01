'use client';

import Image from 'next/image';
import clsx from 'clsx';
import { InfoButton } from '@/shared/ui';
import { useModal } from '@/widgets/modal';
import { ReferralLinkProps } from '../model/types';
import styles from './ReferralLink.module.scss';

export const ReferralLink = ({ className }: ReferralLinkProps) => {
    const { openModal } = useModal();

    return (
        <div className={styles.wrapper}>
            <div className={clsx(styles.link, className)}>
                <input
                    className={styles.input}
                    type="text"
                    value="https://referral-link_121_test_user"
                    readOnly
                    aria-label="Реферальная ссылка"
                />

                <Image
                    className={styles.copy}
                    src="/icons/copy.svg"
                    alt="Копировать"
                    width={16}
                    height={16}
                />
            </div>
            <InfoButton
                className={styles.infoButtonBlue}
                onClick={() => openModal('referral_info')}
            />
        </div>
    );
};
