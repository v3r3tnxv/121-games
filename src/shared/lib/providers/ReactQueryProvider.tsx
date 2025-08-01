'use client';

// src/shared/lib/providers/ReactQueryProvider.tsx
import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Создаем клиента один раз на клиентской стороне
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            // Глобальные настройки по умолчанию
            staleTime: 1000 * 60 * 5, // 5 минут
            refetchOnWindowFocus: false,
            retry: 1,
        },
    },
});

export const ReactQueryProvider = ({ children }: { children: ReactNode }) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
            {/* <ReactQueryDevtools initialIsOpen={false} /> // Опционально, для разработки */}
        </QueryClientProvider>
    );
};
