import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

function contact() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.description}>
          <a href="https://www.linkedin.com/in/timothy-huynh-yyc/">
            https://www.linkedin.com/in/timothy-huynh-yyc/
          </a>
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className={styles.vercelLogo}
            width={100}
            height={24}
            priority
          />
        </div>
      </main>
    </>
  );
}

export default contact;
