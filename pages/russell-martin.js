import PageHero from "../component/PageHero";
import Desert from '../public/img/desert-sunset.jpeg';
import { Col, Container, Row } from "react-bootstrap";
import styles from '../styles/RussellMartin.module.scss';
import Image from "next/image";
import Link from 'next/link';
import russell from "../public/img/russell-martin.jpeg";
import { Parallax } from "react-parallax";

const RussellMartin = () => {
    return(
        <>
            <PageHero text="Russell Martin" image={Desert} />
            <main>
                <section className={styles.russell}>
                    <Container>
                        <Row className="justify-content-center">
                            <Col md={10}>
                                <div className={styles.about_russell}>
                                    <span data-name="Russell Martin"><Image src={russell} alt="Russell Martin" /></span>
                                    <p>
                                        Russell Martin directed, wrote, and produced the highly acclaimed and award-winning documentary Beautiful Faces, filmed in Mexico City, which premiered in 2012. He is a producer and co-writer of the award-winning documentary film Two Spirits and an award-winning, internationally published author of two critically acclaimed novels, The Sorrow of Archaeology and Beautiful Islands, as well as many nonfiction books. He has written for Time, the New York Times, New York Times Magazine, and National Public Radio.
                                        <br/><br/>
                                        His nonfiction book Beethoven&apos;s Hair, a United States bestseller and a Washington Post Book of the Year, has been published in twenty-one translated editions and is the subject of a Gemini-award-winning film of the same name. His books have been optioned by Robert Redford&apos;s Wildwood Enterprises, the Denver Center Theatre Company, and New World Television. He is, says Kirkus Reviews, &quot;first and foremost a masterful storyteller.&quot;
                                        <br/><br/>
                                        His highly acclaimed book, Picasso&apos;s War, has been published in seven international editions; Out of Silence, was named by the Bloomsbury Review as one of fifteen best books of its first fifteen years of publication, and  A Story That Stands Like A Dam: Glen Canyon and the Struggle for the Soul of the West, won the Caroline Bancroft History Prize.
                                        <br/><br/>
                                        When he was awarded an honorary doctorate by Colorado College in 1995, the citation read, in part, &quot;Mr. Martin offers to general audiences precise and accurate, but highly readable, studies of extraordinarily complex issues. He does more: he sees beyond what is already known; he moves beyond synthesis to new insights. His work is disciplined, analytical, and creative. It is also profoundly humane.&qout;
                                    </p>
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
                                        <h5 className="text-center">
                                            Russell Martin is also a nationally and internationally bestselling ghostwriter who has worked for many years in collaboration with distinguished authors to create books that are powerful, persuasive, and critically as well as commercially successful. He is known for his professionalism, collegiality, and unique ability to accurately and engagingly approximate the author&apos;s own voice to tell stories and present information and ideas in highly compelling ways.
                                            <br/>
                                            <br/>
                                            He can consider ghostwriting collaborations with authors writing in English to create autobiographies, company histories, memoirs, self-help books, opinion pieces, and general fiction or nonfiction books.
                                            <br/>
                                            <br/>
                                            He can be contacted at russell AT sayyesquickly.net or at +1 818 601 4800.
                                        </h5>
                                        <div className="flex-center">
                                            <Link href="/news"><a className="button solid mt-4">News</a></Link>
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

export default RussellMartin;