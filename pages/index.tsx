// pages/index.js
import LanguageSwitcher from '@/components/localeSwitcher';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Home() {
    const t = useTranslations("Home");
  const navigationKeys = Object.keys(t.raw("navigation"));
  return (
    <div>
      <h1 className='font-bold text-xl text-center py-5'>Page router</h1>
      <LanguageSwitcher />
        {/* navigation  */} 
       <nav>
        <ul className='flex gap-10 justify-center py-10 text-xl'>
          {navigationKeys.map((key) => (
            <li key={key}>
              <Link href={`/${key}`}>{t(`navigation.${key}`)}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <main>
        <div>
          <aside>
            <h2 className='bg-white/10 py-3 px-3'>{t("title")}</h2>
            <p className='mt-10'>  {t("description")}</p>
          </aside>
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps({ locale }: {locale: string}) {
  const messages = await import(`../messages/${locale}.json`).then((m) => m.default);

  return {
    props: {
      messages
    }
  };
}
