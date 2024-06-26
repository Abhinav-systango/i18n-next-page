import { useTranslations } from "next-intl";
import React from "react";

const Home = () => {
  const t = useTranslations("Home");

  return <div>{t('navigation.home')}</div>;
};

export default Home;
export async function getStaticProps({ locale }: {locale: string}) {
  const messages = await import(`../../messages/${locale}.json`).then((m) => m.default);

  return {
    props: {
      messages
    }
  };
}