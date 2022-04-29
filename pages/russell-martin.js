import PageHero from "../component/PageHero";
import Head from "next/head";
import { Col, Container, Row } from "react-bootstrap";
import styles from '../styles/RussellMartin.module.scss';
import Image from "next/image";
import Link from 'next/link';
import { Parallax } from "react-parallax";

const RussellMartin = ({pageContent, headshot, loaded}) => {
    const russell_headshot = {
        src: headshot.source_url,
        height: headshot.media_details.height,
        width: headshot.media_details.width
    };
    if (loaded){
        return(
            <>

                <Head>
                    <title>{pageContent.title.rendered} – Say Yes Quickly</title>
                    <meta name="description" content="This is the index or home page of the Say Yes Quickly Productions website." />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <PageHero text={pageContent.title.rendered} image={pageContent.better_featured_image.source_url} />
                <main>
                    <section className={styles.russell}>
                        <Container>
                            <Row className="justify-content-center">
                                <Col md={10}>
                                    <div className={styles.about_russell}>
                                        <span className={styles.russell_img} data-name="Russell Martin"><Image src={russell_headshot} alt="Russell Martin" /></span>
                                        <div className={styles.about_russell_russell_description} dangerouslySetInnerHTML={{__html: pageContent.content.rendered}}></div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section className={styles.ribbon}>
                        <Container>
                            <Row>
                                <Col className={styles.buttons}>
                                    <Link href="/books"><a className="button solid">Books by Russell Martin</a></Link>
                                    <Link href="/films"><a className="button solid">Films by Russell Martin</a></Link>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section className={`${styles.russell_info} no-padding`}>
                        <Parallax bgImage="./img/san-miguels.jpeg" strength={240} renderLayer={percentage => ( <div data-percentage={percentage} /> )}>
                            <Container>
                                <Row className="justify-content-center">
                                    <Col lg={9}>
                                        <div className={styles.russell_box}>
                                            <h5 className="text-center" dangerouslySetInnerHTML={{__html: pageContent.acf.about_russell}}></h5>
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
        );
    }
    return <h1>Loading...</h1>
}

export const getStaticProps = async () => {
    const query = await fetch('https://cms.sayyesquickly.net/wp-json/wp/v2/pages/88');
    const pageContent = await query.json();

    const headshotQuery = await fetch(`https://cms.sayyesquickly.net/wp-json/wp/v2/media/${pageContent.acf.russell_headshot}`);
    const headshot = await headshotQuery.json();

    return {
        props: {
            pageContent, 
            headshot,
            "loaded" : true
        },
        revalidate: 10
    }
}

export default RussellMartin;