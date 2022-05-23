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

export default function Home({homepageData, posts, russell_imageData}) {
    console.log(homepageData);
    return (
        <>
            <Head>
                <title>Say Yes Quickly</title>
                <meta name="description" content="This is the index or home page of the Say Yes Quickly Productions website." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <Hero homepageData={homepageData} />
                <section className={styles.about}>
                    <Container>
                        <Row className="justify-content-center">
                            <div className="flex-center"><Image className={styles.about_logo} src={Logo} alt="Say Yes Quickly Logo" /></div>
                            <Col lg={8} md={12}>
                                <Row>
                                    <Col lg={6} className={styles.has_right_border}>
                                        <p>{homepageData.acf.about_syq_homepage_left}</p>
                                    </Col>
                                    <Col lg={6}>
                                        <p>{homepageData.acf.about_syq_homepage_right}</p>
                                    </Col>
                                </Row>
                                <div className="center_items">
                                    <Link href={homepageData.acf.home_about_button_link}><a className="button solid alt-green">{homepageData.acf.home_about_button_text}</a></Link> 
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className={styles.video}>
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg={6} md={8}>
                                <VSlider />
                            </Col>
                        </Row>
                    </Container>
                </section> 
                <section className={styles.russell}>
                    <Container>
                        <Row className="justify-content-center align-items-center">
                            <Col lg={5} md={10}>
                                <h1 className={styles.russell_name}>{homepageData.acf.russell_martin.heading}</h1>
                                <p className={styles.russell_about}>{homepageData.acf.russell_martin.description}</p>
                                <Link href={homepageData.acf.homepage_russell_button.button_link}><a className="button solid">{homepageData.acf.homepage_russell_button.button_text}</a></Link>
                            </Col>
                            <Col lg={5} md={10} className="mt-5 mt-lg-0">
                                <div className="flex-center" style={{position: "relative", display: 'block'}}><Image loading="lazy" placeholder="blur" src={Russell} alt="Russell Martin" /></div>
                                {/* <img src="img/russell-martin.jpeg" alt="Russell Martin" /> */}
                            </Col>
                        </Row>
                    </Container>
                </section>
                {/* <section className={`${styles.books_films}`}>
                    <Container>
                        <Row>
                            <Col md={6} className="text-center">
                                <div className="w-50 m-auto">
                                    <div><Image src={BookIcon} alt="books by Russell Martin" /></div>
                                    <h2 className="title mt-4">Books</h2>
                                    <p>For more than thirty years, Russell Martin has published novels and nonfiction books that have been widely acclaimed in the United States and around the world—books noted for their analysis, discipline, vivid storytelling, and poetic sensibilities.</p>
                                    <Link href="/"><a className="button transparent mt-5">Read More</a></Link>
                                </div>
                            </Col>
                            <Col md={6} className="text-center">
                                <div className="w-50 m-auto">
                                    <div><Image src={FilmIcon} alt="Films by Russell Martin" /></div>
                                    <h2 className="title mt-4">Films</h2>
                                    <p>Russell Martin’s award-winning documentary films have been screened at film festivals and broadcast on television in numerous countries around the world—films that educate, inspire, and move viewers to action.</p>
                                    <Link href="/"><a className="button transparent mt-5">Read More</a></Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section> */}

                <section className={`${styles.books_films} no-padding`}>
                    <Container fluid>
                        <Row>
                            <Col lg={6} className={`${styles.half} book`}>
                                <div className="books col col-md-6 mx-auto">
                                    <div className="w-100 m-auto">
                                        {/* <img src="/img/book-icon.png" alt="books by Russell Martin" /> */}
                                        <div><Image src={BookIcon} alt="books by Russell Martin" /></div>
                                        <h2 className="title mt-4">Books</h2>
                                        <p>For more than thirty years, Russell Martin has published novels and nonfiction books that have been widely acclaimed in the United States and around the world—books noted for their analysis, discipline, vivid storytelling, and poetic sensibilities.</p>
                                        <Link href="/books"><a className="button transparent mt-5">View Books</a></Link>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6} className={`${styles.half} film`}>
                                <div className="films col col-md-6 mx-auto">
                                    <div className="w-100 m-auto">
                                        {/* <img src="/img/film-icon.png" alt="Films by Russell Martin" /> */}
                                        <div><Image src={FilmIcon} alt="Films by Russell Martin" /></div>
                                        <h2 className="title mt-4">Films</h2>
                                        <p>Russell Martin&apos;s award-winning documentary films have been screened at film festivals and broadcast on television in numerous countries around the world—films that educate, inspire, and move viewers to action.</p>
                                        <Link href="/films"><a className="button transparent mt-5">View Films</a></Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <Articles id="home-article" posts={posts} />
                <section className={styles.name}>
                    <Container>
                            <Row className="justify-content-center">
                                <Col md={10}>
                                    <div className={styles.name_box}>
                                        <div className="flex-center"><Image src={Logo} alt="Say Yes Quickly Logo" width={114} height={114} /></div>
                                        <p className="text-center">The name “Say Yes Quickly” comes from a poem by Jelaluddin Rumi, the great Sufi mystic who lived in the thirteenth century. The poem affirms that it’s possible to touch the lives of “people you don’t know and have never seen.” And we love to say yes quickly ourselves when we&apos;re entertained, moved, or impassioned by the creative work of others.<br /><br />Russell and his colleagues at Say Yes Quickly can be reached by telephone at<br />+1 818 601 4800 or by e-mail at russell [AT] sayyesquickly.net</p>
                                        <div className="flex-center"><Link href="/russell-martin"><a className="button solid mt-5">Read About Russell Martin</a></Link></div>
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

// export const getStaticProps = async () => {
//     const query = await fetch('https://cms.sayyesquickly.net/wp-json/wp/v2/posts?_embed');
//     const posts = await query.json();

//     return {
//         props: {posts}
//     }
// }

Home.getInitialProps = async (ctx) => {
    const query = await fetch('https://cms.sayyesquickly.net/wp-json/wp/v2/posts?_embed');
    const homepage = await fetch('https://cms.sayyesquickly.net/wp-json/wp/v2/pages/257');
    const posts = await query.json();
    const homepageData = await homepage.json();
    const russell_image = await fetch(`https://cms.sayyesquickly.net/wp-json/wp/v2/media/${homepageData.acf.russell_image}`)
    const russell_imageData = await russell_image.json();

    return {
        homepageData,
        posts,
        russell_imageData,
        revalidate: 10,
    }
}