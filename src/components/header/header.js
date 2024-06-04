import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./header.module.scss"
import Logo from "../../images/Logo.svg"

const Header = ({$showdata=true}) => {
  const scrollToId = id => {
    const element = document.getElementById(id)
    element.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <header>
      <div className={styles.header}>
        
        <Link to="/" className={styles.textClass}>
          <img src={Logo} alt="Logo" className={styles.logo}></img>
        </Link>

        {$showdata ? (<ul className={styles.mainNavLink} if>
          <li>
            <a
              className={styles.navLink}
              onClick={() => scrollToId("about")}
              aria-label="about"
            >
              About
            </a>
          </li>
          <li>
            <a
              className={styles.navLink}
              onClick={() => scrollToId("contact")}
              aria-label="contact"
            >
              Contact
            </a>
          </li>
        </ul>):(<></>)}
      </div>
    </header>
  )
}


export default Header
