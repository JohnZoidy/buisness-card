import type { NextPage } from "next";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Gallery from "../../components/Gallery";
import styles from "../../styles/Projects.module.scss";

const kvartirka = '/projects/kvartirka/';
const pizza = '/projects/pizza/';
const chat = '/projects/chat/';

const generateSlidesData = (name: string, count: number) => {
  return Array.from({length: count}, (_, i) => `${name}${i + 1}.png`)
}

const Projects: NextPage = () => {
  const { t } = useTranslation("projects");

  return (
    <main>
      <Head>
        <title>{t("head.title")}</title>
        <meta name="description" content={t("head.description")} />
      </Head>
      <h2>{t('h2')}</h2>
      <section>
        <div>
        <h3>{t("kvartirka.title")} <a href="https://kvartirka-test-task.vercel.app" target='_blank' rel='noreferrer'>(DEMO)</a> <a href="https://github.com/JohnZoidy/kvartirka-test-task" target='_blank' rel='noreferrer'>(GitHub)</a></h3>
        <Gallery slidesData={generateSlidesData(kvartirka, 3)} />
        <div className={styles.description}>
          <p>{t("kvartirka.description")}</p>
        </div>
        <div className={styles.tags}>
          {['React', 'Next.js', 'TypeScript', 'SCSS', 'Test task'].map((text, i) => <span key={i}>{text}</span>)}
        </div>
        </div>
      </section>
      <section>
        <div>
        <h3>{t("chat.title")} <a href="https://serene-gorge-12014.herokuapp.com/" target='_blank' rel='noreferrer'>(DEMO)</a> <a href="https://github.com/JohnZoidy/frontend-project-lvl4" target='_blank' rel='noreferrer'>(GitHub)</a></h3>
        <Gallery slidesData={generateSlidesData(chat, 3)} />
        <div className={styles.description}>
          <p>{t("chat.description")} <a href="https://hexlet.io" target='_blank' rel='noreferrer'>Hexlet</a></p>
        </div>
        <div className={styles.tags}>
          {['React', 'Redux', 'Bootstrap', 'web-socket', 'Student project'].map((text, i) => <span key={i}>{text}</span>)}
        </div>
        </div>
      </section>
      <section>
        <div>
        <h3>{t("pizza.title")} <a href="https://react-pizza-topaz-seven.vercel.app/" target='_blank' rel='noreferrer'>(DEMO)</a> <a href="https://github.com/JohnZoidy/react-pizza" target='_blank' rel='noreferrer'>(GitHub)</a></h3>
        <Gallery slidesData={generateSlidesData(pizza, 3)} />
        <div className={styles.description}>
          <p>{t("pizza.description")} <a href="https://www.youtube.com/c/ArchakovBlog" target='_blank' rel='noreferrer'>ArchakovBlog</a></p>
        </div>
        <div className={styles.tags}>
          {['React', 'React-router', 'Redux (with async thunk)', 'TypeScript', 'SCSS', 'Webpack', 'REST', 'Student project'].map((text, i) => <span key={i}>{text}</span>)}
        </div>
        </div>
      </section>
      <section>
      <h3>{t("rest.title")}</h3>
      <p>{t("rest.description")}</p>
      <div className={styles.description}>
          <p>{t("rest.proj-1")} <a href="https://github.com/JohnZoidy/mindbox-test" target='_blank' rel='noreferrer'>GitHub</a> <a href="https://johnzoidy.github.io/testTasks/mindbox/index.html" target='_blank' rel='noreferrer'>(DEMO)</a></p>
          <br />
          <p>{t("rest.proj-2")} <a href="https://github.com/JohnZoidy/FunBox-test" target='_blank' rel='noreferrer'>GitHub</a> <a href="https://johnzoidy.github.io/testTasks/funbox/index.html" target='_blank' rel='noreferrer'>(DEMO)</a></p>
          <br />
          <p>{t("rest.proj-3")} <a href="https://github.com/JohnZoidy/Jupiter-soft-test" target='_blank' rel='noreferrer'>GitHub</a> <a href="https://johnzoidy.github.io/testTasks/jupiter-soft/index.html" target='_blank' rel='noreferrer'>(DEMO)</a></p>
        </div>
      </section>
    </main>
  );
};

type propsType = {
  locale: string;
};

export const getStaticProps = async ({ locale }: propsType) => ({
  props: {
    ...(await serverSideTranslations(locale, ["projects", "header"])),
  },
});

export default Projects;