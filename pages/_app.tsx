import React from 'react';
import 'styles/globals.css';
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <React.StrictMode>
            <Component {...pageProps} />
        </React.StrictMode>
    );
}
