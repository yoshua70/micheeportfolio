import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import styles from './Layout.module.scss'

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout