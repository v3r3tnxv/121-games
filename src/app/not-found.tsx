// Кастомный 404 UI

import { Navbar } from "@/widgets/navbar";

export default function NotFound() {
    return (
        <div style={{
            display: "grid",
            placeContent: "center",
            color: "rgb(255, 59, 48)",
            height: "77vh",
        }}>
            <h1 className="not-found__title">404</h1>
            <p className="not-found__description">Страница не найдена</p>
            <Navbar />
        </div>
    );
}
