import crtFilter from './crt.module.css';
import type { Metadata } from 'next';
import './globals.css';

const baseURL = 'https://base_13.github.io';

export const metadata: Metadata = {
    title: 'base_13 | Developer Portfolio',
    description: 'Portfolio of base_13',
    icons: {
        icon: '/favicon.ico',
    },
    keywords: [
        'base_13',
        'developer portfolio',
        'developer',
        'programmer',
        'TypeScript',
        'React',
        'Zig',
        'C#',
        'Python',
    ],
    authors: [{ name: 'base_13' }],
    creator: 'base_13',
    openGraph: {
        type: 'profile',
        title: 'base_13 | portfolio',
        siteName: "base_13's portfolio",
        url: baseURL,
        locale: 'en_IN',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={crtFilter.crt}>{children}</body>
        </html>
    );
}
