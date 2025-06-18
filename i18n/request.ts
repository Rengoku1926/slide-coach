import {getRequestConfig} from 'next-intl/server';
import {hasLocale} from 'next-intl';
import {routing} from './routing';
 
export default getRequestConfig(async ({requestLocale}) => {
  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

      const homePageMessages = (await import(`../messages/homePage/${locale}.json`)).default
  const aboutPageMessages = (await import(`../messages/aboutPage/${locale}.json`)).default
  const supportPageMessages = (await import(`../messages/supportPage/${locale}.json`)).default
  const educationPageMessages = (await import(`../messages/educationPage/${locale}.json`)).default
  const testimonialPageMessages = (await import(`../messages/testimonialsPage/${locale}.json`)).default
  const accoladesPageMessages = (await import(`../messages/accoladesPage/${locale}.json`)).default



 
  return {
    locale,
    messages: {
      ...homePageMessages,
      ...aboutPageMessages,
      ...supportPageMessages,
      ...educationPageMessages,
      ...testimonialPageMessages,
      ...accoladesPageMessages,
    }
  };
});