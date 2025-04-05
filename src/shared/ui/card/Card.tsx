import { Plate } from "@/shared/ui/plate";
import { CardProps } from './types';
import "./Card.scss";

export const Card = ({ children }: CardProps) => {

    return (
        <div className="card">
            <Plate>
                {children}
            </Plate>
        </div>
    );
};
