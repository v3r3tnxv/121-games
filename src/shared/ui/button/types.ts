export type Buttonvariant = 'primary' | 'secondary' | 'switch' | 'info';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    children?: React.ReactNode;
    variant?: Buttonvariant;
    className: string;
}