import settings from 'settings'
import { t } from 'i18n'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} {...settings} t={t} />
}