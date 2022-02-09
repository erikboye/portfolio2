import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/header/Header";
import Body from "../components/body/Body";
import Main from "../components/main/Main";
import HeroSection from "../components/heroSection/HeroSection";
import ScrollDown from "../components/scrolldown/ScrollDown";
import HeroSectionProjects from "../components/HeroSectionProjects";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Erik Boye Sørensen</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Body>
        <Header />
        <Main>
          <HeroSection />
          <ScrollDown />
          <HeroSectionProjects />
        </Main>
        <Footer />
      </Body>
    </>
  );
}
