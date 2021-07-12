import Head from "next/head";
import Nav from "../component/Nav";
import PageHero from "../component/PageHero";
import HeroImage from '../public/img/who-we-are-hero.jpeg';
import { Container, Row, Col } from "react-bootstrap";
import styles from '../styles/WhoWeAre.module.scss';
import PortfolioItem from "../component/PortfolioItem";
import BfPoster from '../public/img/beautiful-face-poster.jpeg';
import picasso from '../public/img/picassos-war.jpeg';
import { Parallax } from "react-parallax";

const WhoWeAre = () => {
    return (
        <>
            <Head>
                <title>Who We Are – Say Yes Quickly</title>
                <meta name="description" content="This is the index or home page of the Say Yes Quickly Productions website." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />
            <main>
                <PageHero text="Who We Are" image={HeroImage} />
                <section className={styles.who_we_are}>
                    <Container>
                        <Row className="justify-content-center">
                            <Col md={9}>
                                <h5 className="text-center">
                                    Russell Martin and his colleagues bring many years of experience to their work in print, television, and film. Beautiful Faces is a "splendid documentary" according to Reforma, Mexico's leading newspaper. The documentary film Two Spirits was broadcast during the 2010-2011 season of the PBS series "Independent Lens," and won the season's Audience Award. Russell Martin's bestselling book projects--including Beethoven's Hair, Picasso's War, and Out of Silence--have been translated into dozens of languages throughout the world.
                                </h5>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section>
                    <PortfolioItem image={BfPoster} title='&quot;A splendid documentary,&quot; writes Federico Reyes Heroles in Reforma.' description='A compelling new film about a Mexico City hospital where young lives are transformed. Beautiful Faces is an intimate portrait of one of the world&apos;s most remarkable clinics, the disfigured young patients to whom it offers new lives, and the team of surgeons, physicians, and medical professionals who believe it’s the best place in the world to practice their unique, life-transforming craft. Beautiful Faces is a film that’s at once moving and inspiring, informative and challenging, a story that’s told with narrative power and visual eloquence.' link="/films" buttonText="Read More" />
                    <PortfolioItem reversed image={picasso} title='The Destruction of Guernica, And The Masterpiece That Changed the World.' description='&quot;Imaginative cultural historian Martin crafts a well-integrated and fascinating account of Picasso&apos;s famous painting and the horrible events that inspired it. The Author&apos;s signature approach to seemingly offbeat subjects is careful research filtered through a novelistic sensibility to grasp the inherent story, which he unfolds in the engaging, almost offhand manner of a fictional amateur sleuth.--Kirkus Reviews' link="/books" buttonText="Read More" />
                </section>

                <section className={`${styles.russell} no-padding`}>
                <Parallax bgImage="./img/ute-mountain.jpeg" strength={240} renderLayer={percentage => ( <div data-percentage={percentage} /> )}>
                    <Container>
                        <Row className="justify-content-center">
                            <Col md={9}>
                                <div className={styles.russell_box}>
                                    <h5 className="text-center">Russell Martin is known for synthesizing the historic and contemporary elements of filmed and written stories, grounding narrative in careful research, and making complex ideas readily comprehensible and deeply humane.</h5>
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

export default WhoWeAre;