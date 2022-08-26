import type { NextPage } from "next";
import Head from "next/head";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import styles from "../../styles/About.module.scss";

const Resume: NextPage = () => {
  return (
    <div className="main">
      <Head>
        <title>Resume</title>
        <meta name="description" content="About me" />
      </Head>
      <div className={styles.title}>
      <h2>This is it. ;)</h2>
      </div>
      <div className={styles.content}>
        <p>
          Anish Kr. Sinha is an Indian UI/UX Designer & Front End Developer with
          a passion for designing beautiful and fuctional user experiences.
          Typically, he’s Driven & permanently Curious. He’s obsessed with
          designing things and even more obsessed with designing cool & clean
          stuff for the web and mobile. He has been in the business of creating
          since he hung his first painting on the wall when he was 11.
          <br />
          He holds a bachelor degree in Computer Applications. During his
          graduation, he has been actively involved in the web design community
          for the last 3 years. he has designed websites for small businesses,
          events, nonprofits and more. Currently he’s based in Bihar, India.
          Where he’s working as an independent creative.
          </p>
          <p>
            His interests, however, extend beyond the web and he loves helping
            people with branding and print design. He even loves designing 3D
            floor plan.
          </p>
          <p>
            When he’s not designing, he’s probably hanging out with his
            girlfriend, watching series, sketching or messing around on
            something inspired by YouTube tutorials.
          </p>
      </div>
    </div>
  );
};

type propsType = {
  locale: string;
}

export const getStaticProps = async ({ locale }: propsType) => ({
  props: {
    ...await serverSideTranslations(locale, ['resume', 'header']),
  },
})

export default Resume;
