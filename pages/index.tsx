import HeroFirst from "@/components/HeroFirst";
import HeroSecond from "@/components/HeroSecond";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Head from "next/head";
import Logo from "../components/Logo";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gym Baran</title>
        <meta name="description" content="Develop by Md abdullah" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{maxWidth: '1400px'}} className="grid mx-auto p-6 gap-12">
        <HeroFirst/>
        <Intro/>
        <Pricing/>
        <HeroSecond/>
      </main>
    </>
  );
}
