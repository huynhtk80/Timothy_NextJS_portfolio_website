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
  const text =
    "“A jack of all trades is a master of none, but oftentimes better than a master of one.”";
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
          <h2 className=" text-7xl bg-gradient-to-br text-center from-blue-200 via-blue-400 to-blue-500 hover:scale-105 transition-color duration-500 text-transparent bg-clip-text font-extrabold p-5 mb-2">
            Timothy Huynh
          </h2>
          <p className="text-3xl font-bold text-blue-500 mb-2 text-center">
            Full Stack Developer
          </p>

          <p className="text-2xl  text-blue-200 mb-5 text-center">
            {visibleText}
            <span
              ref={cursorRef}
              className={`${cursorState ? "opacity-100" : "opacity-0"} `}
            >
              |
            </span>
          </p>
          {/* <Link href="/contact" className="bg-slate-400 px-2 py-2 rounded-lg">
            Contact Me
          </Link> */}
          <a href="#aboutMe">
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              className="absolute  h-20 opacity-20 hover:opacity-90 fill-white bottom-4 right-50% -translate-x-1/2 z-[4]"
            >
              <path d="M24 12c0-6.623-5.377-12-12-12s-12 5.377-12 12 5.377 12 12 12 12-5.377 12-12zm-1 0c0-6.071-4.929-11-11-11s-11 4.929-11 11 4.929 11 11 11 11-4.929 11-11zm-11.5 4.828l-3.763-4.608-.737.679 5 6.101 5-6.112-.753-.666-3.747 4.604v-11.826h-1v11.828z" />
            </svg>
          </a>
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
