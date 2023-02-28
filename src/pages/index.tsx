import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import NavBar from "@/components/NavBar";

import { useState, useRef, useEffect } from "react";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Footer from "@/components/footer";
import Projects from "@/components/Projects";

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
        <Hero />
        <AboutMe />
        <Projects />

        <section
          id="work"
          className="flex justify-center items-center h-screen bg-blue-500"
        >
          Work History
        </section>
        <section
          id="fun"
          className="flex justify-center items-center h-screen "
        >
          fun
        </section>
        <Footer />
      </main>
    </>
  );
}
