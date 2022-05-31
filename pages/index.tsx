import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Budget UI</title>
        <meta name="landing page" content="Work In Progress" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Budget UI
        </h1>

        <p className={styles.description}>
          This application was created using <a href="https://nextjs.org/docs">Next Js</a><br/>
          This is a placeholder for now, while the business logic is configured.
        </p>

        <div className={styles.grid}>
          <a href="https://github.com/ryanjwise/budget" className={styles.card}>
            <h2>Github Repository &rarr;</h2>
            <p>See the repository source for this page.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn Next &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
