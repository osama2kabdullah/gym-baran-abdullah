import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
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
      <main className="md:px-12 px-6 md:py-6 py-3">
        <Navbar/>
        <Hero/>
      </main>
    </>
  );
}
