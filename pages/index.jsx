import Head from 'next/head';
import FeaturesBlock from '../components/FeaturesBlocks';
import HeroSection from '../components/HeroSection';
import Explore from '../components/Explore'
import Nav from '../components/Nav';
import styles from '../styles/Home.module.css';
import ContactUs from '../components/ContactUs';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
    <div>
      <Nav/>
      <HeroSection/>
      <FeaturesBlock/>
      <Explore/>
      <ContactUs/>
    </div>

    </div>
  )
}
