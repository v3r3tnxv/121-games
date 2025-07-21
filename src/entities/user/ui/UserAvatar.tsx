import Image from 'next/image';

interface UserAvatarProps {
    className?: string;
}

export const UserAvatar = ({ className }: UserAvatarProps) => {
    return (
        <Image
            className={`user-avatar ${className || ''}`}
            src={'/avatars/wood.gif'}
            alt="avatar"
            width={100}
            height={100}
        />
    );
};
