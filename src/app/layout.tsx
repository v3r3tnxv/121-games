// Главный layout

import { StoreProvider } from "@/app/providers/StoreProvider";
import "@/app/styles/main.scss";
import { Navbar } from "@/widgets/navbar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./page.scss";
import { Modal } from "@/widgets/modal";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "121 Games",
    description: "Play and vin",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="ru">

            <body className={`page ${geistSans.variable} ${geistMono.variable}`}>
                <StoreProvider>
                    <main className="page__content">
                        {children}
                    </main>
                    <Modal />
                    <Navbar />
                </StoreProvider>
            </body>
        </html >
    );
}
