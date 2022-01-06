import Head from "next/head";
import PageHero from "../component/PageHero";
import { Container, Row, Col } from "react-bootstrap";
import styles from '../styles/WhoWeAre.module.scss';
import PortfolioItem from "../component/PortfolioItem";
import { Parallax } from "react-parallax";
import Link from "next/link";

const WhoWeAre = ({loaded, pageContent, film, book}) => {
    const bookImg = {
        src : book.better_featured_image.source_url,
        width: book.better_featured_image.media_details.width,
        height: book.better_featured_image.media_details.height
    }
    const filmImg = {
        src : film.better_featured_image.source_url,
        width: film.better_featured_image.media_details.width,
        height: film.better_featured_image.media_details.height
    }
    if (loaded){        
        return (
            <>
                <Head>
                    <title>{pageContent.title.rendered} – Say Yes Quickly</title>
                    <meta name="description" content="This is the index or home page of the Say Yes Quickly Productions website." />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
    
                <main>
                    <PageHero text={pageContent.title.rendered} image={pageContent.better_featured_image.source_url} />
                    <section className={styles.who_we_are}>
                        <Container>
                            <Row className="justify-content-center">
                                <Col lg={9}>
                                    <h5 className="text-center">
                                        Russell Martin and his colleagues bring many years of experience to their work in print, television, and film. Beautiful Faces is a &quot;splendid documentary&quot; according to Reforma, Mexico&apos;s leading newspaper. The documentary film Two Spirits was broadcast during the 2010-2011 season of the PBS series &quot;Independent Lens,&quot; and won the season&apos;s Audience Award. Russell Martin&apos;s bestselling book projects--including Beethoven&apos;s Hair, Picasso&apos;s War, and Out of Silence--have been translated into dozens of languages throughout the world.
                                    </h5>
                                </Col>
                            </Row>
                        </Container>
                    </section>
    
                    <section>
                        <PortfolioItem image={filmImg}>
                            <h4 dangerouslySetInnerHTML={{__html: film.acf.film_tagline}}></h4>
                            <span dangerouslySetInnerHTML={{__html: film.content.rendered}}></span>
                            <Link href="/news"><a className="button solid">Read More</a></Link>
                        </PortfolioItem>
                        <PortfolioItem image={bookImg} reversed>
                            <h4 dangerouslySetInnerHTML={{__html: book.acf.book_tagline}}></h4>
                            <span dangerouslySetInnerHTML={{__html: book.content.rendered}}></span>
                            <Link href="/news"><a className="button solid">Read More</a></Link>
                        </PortfolioItem>
                    </section>
    
                    <section className={`${styles.russell} no-padding`}>
                        <Parallax bgImage="./img/ute-mountain.jpeg" strength={240} renderLayer={percentage => ( <div data-percentage={percentage} /> )}>
                            <Container>
                                <Row className="justify-content-center">
                                    <Col lg={9}>
                                        <div className={styles.russell_box}>
                                            <h5 className="text-center">{pageContent.acf.about_russell}</h5>
                                            <div className="flex-center">
                                                <Link href={pageContent.acf.button_url}><a className="button solid mt-4">{pageContent.acf.button_text}</a></Link>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </Parallax>
                    </section>
                </main>
            </>
        )
    }
    return <h4>Loading...</h4>
}

export const getStaticProps = async () => {
    const query = await fetch('https://cms.sayyesquickly.net/wp-json/wp/v2/pages/38');
    const pageContent = await query.json();

    const filmQuery = await fetch(`https://cms.sayyesquickly.net/wp-json/wp/v2/film/${pageContent.acf.film_id}`);
    const film = await filmQuery.json();
    
    const bookQuery = await fetch(`https://cms.sayyesquickly.net/wp-json/wp/v2/book/${pageContent.acf.book_id}`);
    const book = await bookQuery.json();
    
    return {
        props: {
            pageContent, 
            film, 
            book,
            loaded: true
        }
    }
}

export default WhoWeAre;