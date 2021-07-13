import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import Hero from '../component/Hero';
import Articles from '../component/Articles';
import { Parallax } from 'react-parallax';

import Logo from '../public/img/logo-transparent.png';
import Russell from '../public/img/russell-martin.jpeg';
import BookIcon from '../public/img/book-icon.png';
import FilmIcon from '../public/img/film-icon.png'
import VSlider from '../component/VSlider';

export default function Home() {
    return (
        <>
            <Head>
                <title>Say Yes Quickly</title>
                <meta name="description" content="This is the index or home page of the Say Yes Quickly Productions website." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <Hero />
                <section className={styles.about}>
                    <Container>
                        <Row className="justify-content-center">
                            <div className="flex-center"><Image className={styles.about_logo} src={Logo} alt="Say Yes Quickly Logo" /></div>
                            <Col lg={8}>
                                <Row>
                                    <Col md={6} className={styles.has_right_border}>
                                        <p>Our lives are made of stories told over countless cups of coffee, broadcast and projected onto screens, passed hand-to-hand on the printed page, and whispered in bed. We all eagerly listen to the stories of others and relish telling our own. In their simplicity and grandeur, humor and drama, stories occupy the very heart of what it means to be human.</p>
                                    </Col>
                                    <Col md={6}>
                                        <p>Russell Martin and his colleagues at Say Yes Quickly create imaginative, character-based stories for film, television, print, and new media—stories that get people talking, true stories that reflect the complexities of individual lives and imagined stories that mine essential elements of our shared humanity.</p>
                                    </Col>
                                </Row>
                                <div className="center_items">
                                    <Link href="/about"><a className="button solid alt-green">Who We Are</a></Link> 
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className={styles.video}>
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg={6}>
                                <VSlider />
                            </Col>
                        </Row>
                    </Container>
                </section> 
                <section className={styles.russell}>
                    <Container>
                        <Row className="justify-content-center align-items-center">
                            <Col md={5}>
                                <h1 className={styles.russell_name}>Russell Martin</h1>
                                <p className={styles.russell_about}>Russell Martin directed, wrote, and produced the highly acclaimed and award-winning documentary Beautiful Faces, filmed in Mexico City, which premiered in 2012. He is a producer and co-writer of the award-winning documentary film Two Spirits and an award-winning, internationally published author of two critically acclaimed novels, The Sorrow of Archaeology and Beautiful Islands, as well as many nonfiction books. He has written for Time, the New York Times, New York Times Magazine, and National Public Radio.</p>
                                <Link href="/"><a className="button solid">Read More</a></Link>
                            </Col>
                            <Col md={5}>
                                <div className="flex-center"><Image src={Russell} alt="Russell Martin" /></div>
                                {/* <img src="img/russell-martin.jpeg" alt="Russell Martin" /> */}
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className={styles.books_films}>
                    <Container>
                        <Row>
                            <Col md={6} className="text-center">
                                <div className="w-50 m-auto">
                                    {/* <img src="/img/book-icon.png" alt="books by Russell Martin" /> */}
                                    <div><Image src={BookIcon} alt="books by Russell Martin" /></div>
                                    <h2 className="title mt-4">Books</h2>
                                    <p>For more than thirty years, Russell Martin has published novels and nonfiction books that have been widely acclaimed in the United States and around the world—books noted for their analysis, discipline, vivid storytelling, and poetic sensibilities.</p>
                                    <Link href="/"><a className="button transparent mt-5">Read More</a></Link>
                                </div>
                            </Col>
                            <Col md={6} className="text-center">
                                <div className="w-50 m-auto">
                                    {/* <img src="/img/film-icon.png" alt="Films by Russell Martin" /> */}
                                    <div><Image src={FilmIcon} alt="Films by Russell Martin" /></div>
                                    <h2 className="title mt-4">Films</h2>
                                    <p>Russell Martin’s award-winning documentary films have been screened at film festivals and broadcast on television in numerous countries around the world—films that educate, inspire, and move viewers to action.</p>
                                    <Link href="/"><a className="button transparent mt-5">Read More</a></Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <Articles />
                <section className={styles.name}>
                    <Container>
                            <Row className="justify-content-center">
                                <Col md={10}>
                                    <div className={styles.name_box}>
                                        <div className="flex-center"><Image src={Logo} alt="Say Yes Quickly Logo" width={114} height={114} /></div>
                                        <p className="text-center">The name “Say Yes Quickly” comes from a poem by Jelaluddin Rumi, the great Sufi mystic who lived in the thirteenth century. The poem affirms that it’s possible to touch the lives of “people you don’t know and have never seen.” And we love to say yes quickly ourselves when we&apos;re entertained, moved, or impassioned by the creative work of others.<br /><br />Russell and his colleagues at Say Yes Quickly can be reached by telephone at<br />+1 818 601 4800 or by e-mail at russell [AT] sayyesquickly.net</p>
                                        <div className="flex-center"><Link href="/"><a className="button solid mt-5">Read More</a></Link></div>
                                    </div>
                                </Col>
                            </Row>
                    </Container>
                </section>
                <section className={`${styles.quote} no-padding`}>
                    <Parallax bgImage="./img/point-lookout.jpeg" strength={240} renderLayer={percentage => ( <div data-percentage={percentage} /> )}>
                        <Container>
                            <Row className="justify-content-center">
                                <Col md={9}>
                                    <h5 className="text-center">When Russell Martin was awarded an honorary doctorate by Colorado College, the citation read, in part, “Mr. Martin offers to general audiences precise and accurate, but highly readable, studies of extraordinarily complex issues. He does more: he sees beyond what is already known; he moves beyond synthesis to new insights. His work is disciplined, analytical, and creative. It is also profoundly humane.”</h5>
                                </Col>
                            </Row>
                        </Container>
                    </Parallax>
                </section>
            </main>
        </>
    )
}
