import { PlateProps } from './types';
import "./Plate.scss";

export const Plate = ({ children }: PlateProps) => {

    return (
        <div className="plate">
            {children}
        </div>
    );
};