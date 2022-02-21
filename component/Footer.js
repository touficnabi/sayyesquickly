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
        <section className={styles.footer}>
            <footer>    
                <a onClick={scrollToTop} className={styles.scroll_to_top}><FontAwesomeIcon icon={faAngleDoubleUp} /></a>
                <ul className={styles.footer_nav}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/russell-martin">Russell Martin</Link></li>
                    <li><Link href="/who-we-are">Coaching</Link></li>
                    <li><Link href="/news">News</Link></li>
                    <li><Link href="/books">Books</Link></li>
                    <li><Link href="/films">Films</Link></li>
                    <li><Link href="/#home-article">Articles</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                    <li>Sitemap</li>
                </ul>
                <div style={{marginTop: 30}}>
                    <script src='https://apps.elfsight.com/p/platform.js' defer></script>
                    <div className="elfsight-app-147e51d8-2163-44dd-a2b4-583141808699"></div>
                </div>
                {/* <div className={styles.footer_social}> */}
                    {/* <a href="https://www.facebook.com/RussellMartinSYQ" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a> */}
                    {/* <a href="https://www.instagram.com/russellsyq/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a> */}
                    {/* <a href="hhttps://twitter.com/russellsyq?lang=en" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a> */}
                    {/* <a href="https://medium.com/@russellmartin/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faMediumM} /></a> */}
                    {/* <a href="https://vimeo.com/user2249764" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faVimeoV} /></a> */}
                {/* </div> */}
                <div className={styles.footnote}>
                    &copy; {new Date().getFullYear()} - <Link href="/">Say Yes Quickly</Link> | Website by: <a href="http://toufic.me/" rel="noopener noreferrer" target="_blank">Toufic Nabi</a>
                </div>
            </footer>
        </section>
    )
}

export default Footer;