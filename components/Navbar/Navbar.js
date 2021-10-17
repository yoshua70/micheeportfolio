import styles from './Navbar.module.scss'
import Link from 'next/link'

const NavLink = ({ children, href }) => {
  return (
    <Link href={href}>
      <a className={styles.navlink}>{children}</a>
    </Link>
  )
}

const NavLinks = () => {
  return (
    <div className={styles.navlinks}>
      <NavLink href="#bio">Réalisations</NavLink>
      <NavLink href="#contact">Contact</NavLink>
      <NavLink href="/blog">Blog</NavLink>
    </div>
  )
}


const Navbar = () => {
  return (
    <nav className={styles.nav}>
      
      <NavLink href="/">
      <span className={styles.brand}>michee allidjinou</span></NavLink>
      <NavLinks />
    </nav>
  )
}

export default Navbar