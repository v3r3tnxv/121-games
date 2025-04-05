import { ButtonProps } from './types';
import "./Button.scss";

export const Button = ({
    label,
    onClick,
    disabled,
    variant = 'primary',
    children,
    className,
    ...props
}: ButtonProps) => {

    return (
        <button
            className={`button button--${variant} ${className || ''}`} // Добавляем переданный класс
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {children}
            {label}
        </button>
    );
};