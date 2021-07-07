import styles from '../styles/Articles.module.scss';
import { Container, Row, Col } from 'react-bootstrap';
import ArticleModal from './ArticleModal';
const Articles = () => {
    return(
        <section className={styles.articles}>
            <Container>
                <Row className="justify-content-center">
                    <Col md={10}>
                        <Row>
                            <Col md={4}>
                                <div className={styles.article} style={{backgroundImage: "url('img/blog-post-1.jpeg')"}}>
                                    <div>
                                        <h3>Driving My Father Home</h3>
                                        <p>“At last my father and I seemed made of the same stuff.”</p>
                                    </div>
                                    <ArticleModal />
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className={styles.article} style={{backgroundImage: "url('img/blog-post-2.jpeg')"}}>
                                    <div>
                                        <h3>Also Your Neighbour</h3>
                                        <p>“Truth is one, but the wise have given it many names.”</p>
                                    </div>
                                    <ArticleModal />
                                </div>
                            </Col>
                            <Col md={4}>
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
                    <div className={styles.center_btn}><a href="/" className="button solid">Read More</a></div>
                </Row>
            </Container>
        </section>
    )
}

export default Articles;