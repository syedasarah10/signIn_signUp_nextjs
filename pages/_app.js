import Link from 'next/link'
import '../styles/globals.css'
import styles from '../styles/Global.module.css'
import Amplify from 'aws-amplify'
import config from '../src/aws-exports'


Amplify.configure({
  ...config,
  ssr: true
})

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className = 'navbar'>
        <Link href="/">
          <span className={styles.linkStyle}>Home</span>
        </Link>
        <Link href="/profile">
          <span className ={styles.linkStyle}>Profile</span>
        </Link>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}


export default MyApp
