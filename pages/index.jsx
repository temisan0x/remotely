import Head from 'next/head';
import FeaturesBlock from '../components/FeaturesBlocks';
import HeroSection from '../components/HeroSection';
import Explore from '../components/Explore'
import Nav from '../components/Nav';
import styles from '../styles/Home.module.css';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import NewsLetter from '../components/NewsLetter';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Welcome to remotely home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
    <div>
      <Nav/>
      <HeroSection/>
      <FeaturesBlock/>
      <Explore/>
      <ContactUs/>
      <NewsLetter/>
      <Footer/>
    </div>

    </div>
  )
}
