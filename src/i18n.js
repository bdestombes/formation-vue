import { createI18n } from 'vue-i18n';

import fr from './translations/fr.json';

export default createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'fr',
  fallbackLocale: 'fr',
  messages: { fr }
});
