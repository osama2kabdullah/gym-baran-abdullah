import HeroFirst from "@/components/HeroFirst";
import HeroSecond from "@/components/HeroSecond";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Head from "next/head";
import bgtwo from '../public/bgtwo.png';

export default function Home() {
  const mainbg = {
    maxWidth: "1400px",
    backgroundImage: `url(${bgtwo.src})`,
  backgroundPosition: "top left",
  backgroundRepeat: "no-repeat",
  }
  return (
    <>
      <Head>
        <title>Gym Baran</title>
        <meta name="description" content="Develop by Md abdullah" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={mainbg} 
      className={`grid mx-auto gap-12`}
      >
        <Navbar />
        <HeroFirst />
        <Intro />
        <Pricing />
        <HeroSecond />
      </main>
    </>
  );
}
