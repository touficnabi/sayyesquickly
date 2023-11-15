import Head from 'next/head';
import { Container, Row, Col } from 'react-bootstrap';
import Logo from '../public/img/logo.jpeg';
import Hero from './Hero';
import styles from '../styles/MissingContent.module.scss';

const MissingContent = ({title}) => {
    return (
        <main>
            <Head>
                {title && <title>{title}</title>}
            </Head>
            <section className={styles.missing_content}>
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={8}>
                            <h3 className='text-center uppercase text-5xl'>⚠️<br/>Missing!</h3>
                            <h3 className={`text-center ${styles.missing_content__text}`}>The page you are looking for is not available at this moment.</h3>
                            <div className='center_items'>
                                <a className="button solid" href="mailto:russell@sayyesquickly.net/">Contact Russell Martin</a>
                            </div>
                        </Col>   
                    </Row>
                </Container>
            </section>
        </main>
    )
}

export default MissingContent;