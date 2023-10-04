"use client"

import { HomeTop } from '@/components/HomeTop'
import styles from './page.module.css'
import { HomeMid } from '@/components/HomeMid'
import { HomeBot } from '@/components/HomeBot'

export default function Home() {
  return (
    <main className={styles.main}>
      <HomeTop />
      <HomeMid />
      <HomeBot />
    </main>
  )
}
