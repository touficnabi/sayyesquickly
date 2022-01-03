import PageHero from "../component/PageHero";
import Head from "next/head";
import { Col, Container, Row } from "react-bootstrap";
import styles from '../styles/RussellMartin.module.scss';
import Image from "next/image";
import Link from 'next/link';
import russell from "../public/img/russell-martin.jpeg";
import { Parallax } from "react-parallax";

const RussellMartin = ({pageContent, headshot, loaded}) => {
    console.log(pageContent)
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
                                        <span data-name="Russell Martin"><Image src={russell_headshot} alt="Russell Martin" /></span>
                                        <div className={styles.about_russell_russell_description} dangerouslySetInnerHTML={{__html: pageContent.content.rendered}}></div>
                                        {/* <p>
                                            Russell Martin directed, wrote, and produced the highly acclaimed and award-winning documentary Beautiful Faces, filmed in Mexico City, which premiered in 2012. He is a producer and co-writer of the award-winning documentary film Two Spirits and an award-winning, internationally published author of two critically acclaimed novels, The Sorrow of Archaeology and Beautiful Islands, as well as many nonfiction books. He has written for Time, the New York Times, New York Times Magazine, and National Public Radio.
                                            <br/><br/>
                                            His nonfiction book Beethoven&apos;s Hair, a United States bestseller and a Washington Post Book of the Year, has been published in twenty-one translated editions and is the subject of a Gemini-award-winning film of the same name. His books have been optioned by Robert Redford&apos;s Wildwood Enterprises, the Denver Center Theatre Company, and New World Television. He is, says Kirkus Reviews, &quot;first and foremost a masterful storyteller.&quot;
                                            <br/><br/>
                                            His highly acclaimed book, Picasso&apos;s War, has been published in seven international editions; Out of Silence, was named by the Bloomsbury Review as one of fifteen best books of its first fifteen years of publication, and  A Story That Stands Like A Dam: Glen Canyon and the Struggle for the Soul of the West, won the Caroline Bancroft History Prize.
                                            <br/><br/>
                                            When he was awarded an honorary doctorate by Colorado College in 1995, the citation read, in part, &quot;Mr. Martin offers to general audiences precise and accurate, but highly readable, studies of extraordinarily complex issues. He does more: he sees beyond what is already known; he moves beyond synthesis to new insights. His work is disciplined, analytical, and creative. It is also profoundly humane.&qout;
                                        </p> */}
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section className={styles.ribbon}>
                        <Container>
                            <Row>
                                <Col className={styles.buttons}>
                                    <Link href="/"><a className="button solid">Books by Russell Martin</a></Link>
                                    <Link href="/"><a className="button solid">Films by Russell Martin</a></Link>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section className={`${styles.russell_info} no-padding`}>
                        <Parallax bgImage="./img/san-miguels.jpeg" strength={240} renderLayer={percentage => ( <div data-percentage={percentage} /> )}>
                            <Container>
                                <Row className="justify-content-center">
                                    <Col md={9}>
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
        }
    }
}

export default RussellMartin;