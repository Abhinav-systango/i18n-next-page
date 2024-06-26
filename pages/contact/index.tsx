import { useTranslations } from 'next-intl';
import React from 'react'

const Contact = () => {
    const t = useTranslations("Home");
  return (
    <div>{t('navigation.contact')}</div>
  )
}

export default Contact

export async function getStaticProps({ locale }: {locale: string}) {
  const messages = await import(`../../messages/${locale}.json`).then((m) => m.default);

  return {
    props: {
      messages
    }
  };
}
