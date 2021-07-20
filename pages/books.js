import Head from 'next/head';
import Link from 'next/link';
import PageHero from '../component/PageHero';
import PortfolioItem from '../component/PortfolioItem';
import HeroImage from '../public/img/books-hero.jpeg';
import book1 from '../public/img/book1.jpeg';
import styles from '../styles/Books.module.scss'

const Books = () => {
    return(
        <main>
            <Head>
                <title>Books by Russell Martin</title>
            </Head>
            <PageHero text="Books" image={HeroImage} />
            <div className={styles.books}>
                <PortfolioItem image={book1} book name="The Sorrow of Archaeology">
                    <h4>The Sorrow of Archaeology, a novel.</h4>
                    <p>&quot;Russell Martin&apos;s The Sorrow of Archaeology is an intelligent, poetic novel with the complex characterization and layered plotlines of rich literature. . . . a lyrical page-turner with a knack for grappling with the deeper human questions of self-identity, personal history, and physical and emotional brokenness <br />- Rocky Mountain News</p>
                    <Link href="/news"><a className="button solid">Read More</a></Link>
                </PortfolioItem>
                <PortfolioItem image={book1} book name="Picassos War" reversed>
                    <h4>The Sorrow of Archaeology, a novel.</h4>
                    <p>&quot;Russell Martin&apos;s The Sorrow of Archaeology is an intelligent, poetic novel with the complex characterization and layered plotlines of rich literature. . . . a lyrical page-turner with a knack for grappling with the deeper human questions of self-identity, personal history, and physical and emotional brokenness <br />- Rocky Mountain News</p>
                    <Link href="/news"><a className="button solid">Read More</a></Link>
                </PortfolioItem>
                <PortfolioItem image={book1} book >
                    <h4>The Sorrow of Archaeology, a novel.</h4>
                    <p>&quot;Russell Martin&apos;s The Sorrow of Archaeology is an intelligent, poetic novel with the complex characterization and layered plotlines of rich literature. . . . a lyrical page-turner with a knack for grappling with the deeper human questions of self-identity, personal history, and physical and emotional brokenness <br />- Rocky Mountain News</p>
                    <Link href="/news"><a className="button solid">Read More</a></Link>
                </PortfolioItem>
                <PortfolioItem image={book1} book reversed>
                    <h4>The Sorrow of Archaeology, a novel.</h4>
                    <p>&quot;Russell Martin&apos;s The Sorrow of Archaeology is an intelligent, poetic novel with the complex characterization and layered plotlines of rich literature. . . . a lyrical page-turner with a knack for grappling with the deeper human questions of self-identity, personal history, and physical and emotional brokenness <br />- Rocky Mountain News</p>
                    <Link href="/news"><a className="button solid">Read More</a></Link>
                </PortfolioItem>
            </div>
        </main>
    )
}
export default Books;