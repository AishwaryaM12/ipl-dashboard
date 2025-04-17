import '@/styles/globals.css'; // alias @ means 'src/', or use relative path
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
