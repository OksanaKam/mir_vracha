import AboutHobl from '@/components/AboutHobl'
import styles from './page.module.scss'
import TherapyHobl from '@/components/TherapyHobl'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.main__vector47}></div>
      <div className={styles.main__vector46}></div>
      <div className={styles.main__vector45}></div>
      <div className={styles.main__common}>
        <AboutHobl />
        <TherapyHobl />
      </div>
    </main>
  )
}
