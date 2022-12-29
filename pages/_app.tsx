import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Roboto_Slab} from '@next/font/google'

const roboto_slab = Roboto_Slab({ weight: '400', subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto_slab.className}>
      <Component {...pageProps} />
    </main>
  )
}
