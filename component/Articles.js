import styles from '../styles/Articles.module.scss';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import ArticleModal from './ArticleModal';

import ArticleIcon from '../public/img/article-icon.png'

const Articles = ({id}) => {
    return(
        <section className={styles.articles} id={id}>
            <Container>
                <Row className="justify-content-center">
                    <Col md={10}>
                        <div className="flex-center"><Image src={ArticleIcon} alt="Articles by Russell Martin" /></div>
                        <h2 className="title mt-4">Articles</h2>
                        <Row className="mt-5">
                            <Col lg={4}>
                                <div className={styles.article} style={{backgroundImage: "url('img/blog-post-1.jpeg')"}}>
                                    <div>
                                        <h3>Driving My Father Home</h3>
                                        <p>“At last my father and I seemed made of the same stuff.”</p>
                                    </div>
                                    <ArticleModal />
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className={styles.article} style={{backgroundImage: "url('img/blog-post-2.jpeg')"}}>
                                    <div>
                                        <h3>Also Your Neighbour</h3>
                                        <p>“Truth is one, but the wise have given it many names.”</p>
                                    </div>
                                    <ArticleModal />
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className={styles.article} style={{backgroundImage: "url('img/blog-post-3.jpeg')"}}>
                                    <div>
                                        <h3>Concerto</h3>
                                        <p>The Journey for Peace of Pablo Casals</p>
                                    </div>
                                    <ArticleModal />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <div className={styles.center_btn}><a className="button solid">Read More</a></div>
                </Row>
            </Container>
        </section>
    )
}

export default Articles;