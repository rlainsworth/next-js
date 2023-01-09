
import styles from './layout.module.css'
import utilStyles from '../styles/util.module.css'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
//import styles from '../styles/Home.module.css';

const name = 'Randy Ainsworth'
export const siteTitle = 'Next.js'

export default function Layout({ children, home }) {
    // return <div className={styles.container}>{children}</div>;
    return (
    <div className={styles.container}> 
      <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt={name}
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>

    <footer>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
      </a>
    </footer>
    </div>
    )
  }