import { Container, Row, Col } from "react-bootstrap";
import styles from '../styles/PortfolioItem.module.scss';
import Image from 'next/image';
// import Link from 'next/link';

const PortfolioItem = ({reversed, book, name, image, children}) => {

    if (book){
        return(
            <div className={ reversed ? `${styles.portfolio} ${styles.reversed}` : styles.portfolio} style={book? {padding: '100px 0', margin : '0'} : ''} >
                <Container fluid className={styles.book}>
                    <Row className="justify-content-center">
                        <Col md={10}>
                            <div className={styles.wrapper}>
                                <div className={`${styles.portfolio__image} mb-5 mb-lg-0`}>
                                    <div>
                                        <Image src={image} alt={name} />
                                        <div className={styles.book_name}><p>{name}</p></div>
                                    </div>
                                </div>
                                <div className={styles.portfolio__info}>
                                    {children}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

    return (
        <div className={ reversed ? `${styles.portfolio} ${styles.reversed}` : styles.portfolio}>
            <Container>
                <Row className="justify-content-center">
                    <Col md={10}>
                        <div className={styles.wrapper}>
                            <div className={`${styles.portfolio__image} mb-5 mb-lg-0`}>
                                <Image src={image} alt={children[0].props.children} />
                            </div>
                            <div className={styles.portfolio__info}>
                                {children}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PortfolioItem;