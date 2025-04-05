import Image from "next/image";
import { useProfile } from "@/entities/user";

interface UserAvatarProps {
    className?: string;
}

export const UserAvatar = ({ className }: UserAvatarProps) => {
    const { user } = useProfile();

    return (
        <Image
            className={`user-avatar ${className || ""}`}
            src={user.avatar}
            alt="avatar"
            width={100}
            height={100}
        />
    );
};