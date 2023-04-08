import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Titillium_Web } from 'next/font/google';

const titillium = Titillium_Web({
	subsets: ['latin'],
	weight: ['300', '400', '600', '700'],
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className={titillium.className}>
			<Component {...pageProps} />
		</div>
	);
}
