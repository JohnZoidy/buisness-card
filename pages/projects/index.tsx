import type { NextPage } from "next";
import Head from "next/head";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import styles from "../../styles/About.module.scss";

const About: NextPage = () => {
  const { t } = useTranslation('about');
  return (
    <div className={styles.main}>
      <Head>
        <title>{t('head.title')}</title>
        <meta name="description" content={t('head.description')} />
      </Head>
      <div className={styles.title}>
      <h2>{t('h2')}</h2>
      </div>
      <div className={styles.content}>
        <p>{t('text1')}<br />{t('text2')}
        </p>
        <p>
          {t('text3')}
        </p>
        <p>
          {t('text4')}
        </p>
      </div>
      <div className={styles.bubble} />
      <div className={styles.bubble} />
      <div className={styles.bubble} />
      <div className={styles.bubble} />
      <div className={styles.bubble} />
      <div className={styles.bubble} />
    </div>
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
