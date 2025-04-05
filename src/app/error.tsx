// Ошибки страницы

"use client";

import { Button } from "@/shared/ui/button";
import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div style={{
            display: "grid",
            gap: "16px",
            padding: "16px",
        }}>
            <h1 style={{
                color: "rgb(255, 59, 48)",
            }}>Ошибка</h1>
            <p style={{ color: "rgb(255, 59, 48)" }}>Произошла ошибка при загрузке страницы.</p>
            <Button
                onClick={() => reset()}
                className=""
                label="Попробовать снова"
            />
        </div>
    );
}
