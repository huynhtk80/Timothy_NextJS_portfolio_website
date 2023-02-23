import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import coverImg from "../../public/TH_Cover.jpg";
import { useState, useRef, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cursorState, setCursorState] = useState(true);
  const text = "Full Stack Developer!";
  const cursorRef = useRef(null);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeoutId = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeoutId);
    } else {
      const intervalId = setInterval(() => {
        setCursorState((prevState) => !prevState);
      }, 500);
      return () => clearInterval(intervalId);
    }
  }, [currentIndex]);

  const visibleText = text.substring(0, currentIndex);
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
          className="flex flex-col justify-center items-center h-screen "
        >
          <div
            id="hero_image_overlay"
            className="absolute top-0 left-0 right-0 bottom-0 -z-10"
          >
            <Image
              src={coverImg}
              alt="mountain cover image"
              className=" object-cover min-h-full"
            ></Image>
          </div>
          <div
            id="hero_image_overlay"
            className="absolute top-0 left-0 right-0 bottom-0 -z-10 bg-slate-700 opacity-70"
          ></div>
          <h2 className=" text-7xl bg-gradient-to-br from-blue-200 via-blue-400 to-blue-500 hover:scale-105 transition-color duration-500 text-transparent bg-clip-text font-extrabold p-5 mb-2">
            Timothy Huynh
          </h2>

          <p className="text-2xl font-bold text-blue-500">
            {visibleText}
            <span
              ref={cursorRef}
              className={`${cursorState ? "opacity-100" : "opacity-0"} `}
            >
              |
            </span>
          </p>
          <Link href="/contact">Contact Me</Link>
        </section>
        <section
          id="aboutMe"
          className="flex justify-center items-center h-screen bg-blue-500"
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
        <footer
          id="footer"
          className="flex justify-center items-center h-36 bg-blue-400"
        >
          <p>huynh.tk80@gmail.com | © 2023 All rights reserved </p>
        </footer>
      </main>
    </>
  );
}
