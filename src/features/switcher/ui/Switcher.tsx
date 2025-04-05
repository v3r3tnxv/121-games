"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/lib/hooks/redux";
import { switchTo, setInitial, selectSelected } from "../model/switcherSlice";
import "./Switcher.scss";
import { Button } from "@/shared/ui";
import { SwitcherProps } from "../model/types";

export const Switcher = ({ id, options, className, content }: SwitcherProps) => {
    const dispatch = useAppDispatch();
    const selected = useAppSelector(selectSelected(id));

    useEffect(() => {
        if (options.length > 0) {
            dispatch(setInitial({ id, value: options[0].label })); // Устанавливаем первую кнопку
        }
    }, [dispatch, options]);

    return (
        <div className={`switcher ${className}`}>
            <div className="switcher__buttons">
                {options.map(({ label }) => (
                    <Button
                        key={label}
                        className={`${selected === label ? "active" : ""}`}
                        label={label}
                        onClick={() => dispatch(switchTo({ id, value: label }))}
                        variant="switch"
                    >
                    </Button>
                ))}
            </div>

            <div className="switcher__content">
                {content[selected]} {/* Показываем контент по выбранному ключу */}
            </div>
        </div>
    );
};
