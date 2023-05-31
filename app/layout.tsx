import "./globals.css";
import { Inter } from "next/font/google";
import { Header } from "./header";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <Script src="/new-relic-browser-agent.js" />
            </head>
            <body className={inter.className}>
                <Header />
                <div className="p-4">{children}</div>
            </body>
        </html>
    );
}