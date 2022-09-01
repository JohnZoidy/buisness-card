import type { NextPage } from "next";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import styles from "../../styles/Skills.module.scss";

const Skills: NextPage = () => {
  const { t } = useTranslation("skills");
  return (
    <main>
      <Head>
        <title>{t("head.title")}</title>
        <meta name="description" content={t("head.description")} />
      </Head>
      <h2>{t('h2')}</h2>
      <p><b>{t('soft')}</b>{t('info')}<b>{t('hard')}</b></p>
      <div className={styles.skill}>
      <div className={styles.progressbar}>
        <svg>
          <circle cx="80" cy="80" r="70" className={styles.html}></circle>
        </svg>
        <span className={styles.progressbar__text}>HTML</span>
      </div>
        <p>{t('html')}</p>
      </div>
      <div className={styles.skill}>
      <div className={styles.progressbar}>
        <svg>
          <circle cx="80" cy="80" r="70" className={styles.scss}></circle>
        </svg>
        <span className={styles.progressbar__text}>SCSS</span>
      </div>
      <p>{t('scss')}</p>
      </div>
      <div className={styles.skill}>
      <div className={styles.progressbar}>
        <svg>
          <circle cx="80" cy="80" r="70" className={styles.js}></circle>
        </svg>
        <span className={styles.progressbar__text}>JS/TS</span>
      </div>
      <p>{t('js')}</p>
      </div>
      <div className={styles.skill}>
      <div className={styles.progressbar}>
        <svg>
          <circle cx="80" cy="80" r="70" className={styles.react}></circle>
        </svg>
        <span className={styles.progressbar__text}>React</span>
      </div>
      <p>{t('react')}</p>
      </div>
      <div className={styles.skill}>
      <div className={styles.progressbar}>
        <svg>
          <circle cx="80" cy="80" r="70" className={styles.english}></circle>
        </svg>
        <span className={styles.progressbar__text}>English B2</span>
      </div>
      <p>{t('english')}</p>
      </div>
    </main>
  );
};

type propsType = {
  locale: string;
};

export const getStaticProps = async ({ locale }: propsType) => ({
  props: {
    ...(await serverSideTranslations(locale, ["skills", "header"])),
  },
});

export default Skills;
