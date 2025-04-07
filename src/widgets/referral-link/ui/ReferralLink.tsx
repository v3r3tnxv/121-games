import { InfoButton } from '@/shared/ui';
import { ReferralLinkProps } from '../model/types';
import Image from 'next/image';
import { useModal } from '@/widgets/modal';
import "./ReferralLink.scss";

export const ReferralLink = ({ className }: ReferralLinkProps) => {
    const { openModal } = useModal();

    const handleClick = () => {
        openModal('referral_info');  // Открытие модалки с типом 'bank-info'
    };

    return (
        <div className='referral-link__wrapper'>
            <div className={`referral-link ${className}`}>
                <input
                    className="referral-link__input"
                    type="text"
                    value={"https://referral-link_121_test_user"}
                    readOnly
                />
                <Image
                    className="referral-link__copy"
                    src={"/icons/copy.svg"}
                    alt={"Копировать"}
                    width={16}
                    height={16}
                />
            </div>
            <InfoButton className='info-button--blue' onClick={handleClick} />
        </div>
    );
};
