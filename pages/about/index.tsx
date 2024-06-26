import { useTranslations } from 'next-intl';
import React from 'react'

const About = () => {
    const t = useTranslations("Home");
  return (
    <div>{t('navigation.about')}</div>
  )
}

export default About

export async function getStaticProps({ locale }: {locale: string}) {
  const messages = await import(`../../messages/${locale}.json`).then((m) => m.default);

  return {
    props: {
      messages
    }
  };
}
