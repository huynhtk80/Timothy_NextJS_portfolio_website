import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Timothy Huynh</title>
        <meta name="description" content="Portfolio Page for Timothy Huynh" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* todo open graph */}
        {/* <meta property="og:title" content="Timothy Huynh - Full Stack Developer" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="www.timothyhuynh.com"
        />
        <meta
          property="og:image"
          content="https://ia.media-imdb.com/images/rock.jpg"
        /> */}
      </Head>
      <NavBar />
      <main className="">
        <section
          id="hero"
          className="flex flex-col justify-center items-center h-screen"
        >
          <h2 className=" text-red-600 font-extrabold">Timothy Huynh</h2>
          <p>Programing is awesome!!</p>
          <Link href="/contact">Contact Me</Link>
        </section>
        <section
          id="aboutMe"
          className="flex justify-center items-center h-screen"
        >
          about me section
        </section>
        <section
          id="projects"
          className="flex justify-center items-center h-screen"
        >
          Projects
        </section>
        <section
          id="work"
          className="flex justify-center items-center h-screen"
        >
          Work History
        </section>
        <section id="fun" className="flex justify-center items-center h-screen">
          fun
        </section>
      </main>
    </>
  );
}
