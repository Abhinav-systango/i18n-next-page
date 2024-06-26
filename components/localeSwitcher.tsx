import { useRouter } from "next/router";

export default function LanguageSwitcher() {
  const router = useRouter();
  const { locale } = router;

  const changeLanguage = (newLocale: string) => {
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };

  return (
    <div className="flex gap-10 justify-center">
      <button
        onClick={() => changeLanguage("en")}
        disabled={locale === "en"}
        className="buttons-switch"
      >
        English
      </button>
      <button
        onClick={() => changeLanguage("de")}
        disabled={locale === "de"}
        className="buttons-switch"
      >
        Dutch
      </button>
      <button
        onClick={() => changeLanguage("es")}
        disabled={locale === "es"}
        className="buttons-switch"
      >
        Spanish
      </button>
    </div>
  );
}
