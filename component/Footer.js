import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitter, faMediumM, faVimeoV } from "@fortawesome/free-brands-svg-icons";
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Footer.module.scss';
import Link from 'next/link'

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
    };
    return(
        <footer>    
            <a onClick={scrollToTop} className={styles.scroll_to_top}><FontAwesomeIcon icon={faAngleDoubleUp} /></a>
            <ul className={styles.footer_nav}>
                <li>Who We Are</li>
                <li>Russell Martin</li>
                <li>News</li>
                <li>Books</li>
                <li>Films</li>
                <li>Articles</li>
                <li>Contact</li>
                <li>Sitemap</li>
            </ul>
            <div className={styles.footer_social}>
                <a href="https://www.facebook.com/RussellMartinSYQ" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href="https://www.instagram.com/russellsyq/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="hhttps://twitter.com/russellsyq?lang=en" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="https://medium.com/@russellmartin/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faMediumM} /></a>
                <a href="https://vimeo.com/user2249764" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faVimeoV} /></a>
            </div>
            <div className={styles.footnote}>
                &copy; {new Date().getFullYear()} - <Link href="/">Say Yes Quickly</Link> | Website by: <a href="http://toufic.me/" rel="noopener noreferrer" target="_blank">Toufic Nabi</a>
            </div>
        </footer>
    )
}

export default Footer;