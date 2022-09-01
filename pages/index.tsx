import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  const { t } = useTranslation('common');
  return (
    <main className={styles.main}>
      <Head>
        <title>{t('head.title')}</title>
        <meta name="description" content={t('head.description')} />
      </Head>
      <div className={styles.photo}>
      <svg width="526" height="545" viewBox="0 0 526 545" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M435.872 510.221C502.65 439.158 452.435 472.173 512.185 307.667C571.935 143.16 422.85 25.9004 302.561 4.90777C182.273 -16.0849 152.585 44.1916 86.3966 106.855C36.5318 164.876 -29.2234 213.746 15.562 330.545C42.364 400.445 119.768 481.018 196.835 501.679C273.902 522.34 369.094 581.284 435.872 510.221Z" fill="#FFF500"/>
</svg>
      </div>
      <div className={styles.description}>
        <h3>{t('hello')}</h3>
        <h1>
        {t('Im')} <span>{t('name')}</span>{" "}
        </h1>
        <p>
          {t('proffesion')}
          <br />
          {t('location')}
        </p>
        <div className={styles.buttons}>
          <Link href="/resume"><button>{t('buttons.CV')}</button></Link>
          <Link href="/contacts"><button>{t('buttons.action')}</button></Link>
        </div>
      </div>
    </main>
  );
};

type propsType = {
  locale: string;
}

export const getStaticProps = async ({ locale }: propsType) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'header']),
  },
})

export default Home;
