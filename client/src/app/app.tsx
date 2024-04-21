import './globals.css'
import type { AppProps } from 'next/app'
import { AppProviders } from '@/app/app-providers'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export function App({ Component, pageProps }: AppProps) {
  // @ts-ignore
  return (
    <AppProviders>
      <div className={inter.className}>
        {/* @ts-ignore */}
        <Component {...pageProps} />
      </div>
    </AppProviders>)
}
