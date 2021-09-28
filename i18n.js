import settings from 'settings'
import i18next from 'i18next'
import en from 'langs/en'
import cn from 'langs/cn'

i18next.init({
  lng: settings.locale,
  resources: { en, cn }
})

const t = v => i18next.t(v)
export { t }