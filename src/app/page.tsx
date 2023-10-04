"use client";

import { HomeTop } from "@/components/HomeTop";
import styles from "./page.module.css";
import { HomeMid } from "@/components/HomeMid";
import { HomeBot } from "@/components/HomeBot";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
        <main className={styles.main}>
          <HomeTop />
          <HomeMid />
          <HomeBot />
        </main>
      <Footer />
    </>
  );
}
