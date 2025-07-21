// app/layout.tsx
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '@/shared/styles/global.scss';
import { Modal } from '@/widgets/modal';
import { Navbar } from '@/widgets/navbar';
import { StoreProvider } from '../shared/lib/providers';
import styles from './layout.module.scss';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
    display: 'swap',
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: {
        default: '121 Games',
        template: '%s | 121 Games', // Для дочерних страниц
    },
    description: 'Play and win',
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru" suppressHydrationWarning>
            <body className={`${styles.layout} ${geistSans.variable} ${geistMono.variable}`}>
                <StoreProvider>
                    <main className={styles.content}>{children}</main>
                    <Navbar />
                    <Modal />
                </StoreProvider>
            </body>
        </html>
    );
}
