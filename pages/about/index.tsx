import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/future/image";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import styles from "../../styles/About.module.scss";

const About: NextPage = () => {
  const { t } = useTranslation('about');
  return (
    <main>
      <Head>
        <title>{t('head.title')}</title>
        <meta name="description" content={t('head.description')} />
      </Head>
      <h2>{t('h2')}</h2>
      <div className={styles.content}>
        <p>
          <Image src="/photo2.jpg" alt="photo" width={1024} height={700} />
          {t('text')}
        </p>
      </div>
    </main>
  );
};

type propsType = {
  locale: string;
}

export const getStaticProps = async ({ locale }: propsType) => ({
  props: {
    ...await serverSideTranslations(locale, ['about', 'header']),
  },
})

export default About;
