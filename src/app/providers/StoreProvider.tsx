"use client"; // Делаем этот компонент клиентским

import { Provider } from "react-redux";
import { store } from "@/app/providers/store";

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
    return <Provider store={store}>{children}</Provider>;
};
