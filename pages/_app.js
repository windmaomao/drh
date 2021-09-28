import env from './env'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} {...env} />
}