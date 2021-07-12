import { Container, Row, Col } from "react-bootstrap";
import styles from '../styles/PortfolioItem.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const PortfolioItem = ({reversed, image, title, description, link, buttonText}) => {
    return (
        <div className={ reversed ? `${styles.portfolio} ${styles.reversed}` : styles.portfolio}>
            <Container>
                <Row className="justify-content-center">
                    <Col md={9}>
                        <div className={styles.wrapper}>
                            <div className={styles.portfolio__image}>
                                <Image src={image} />
                            </div>
                            <div className={styles.portfolio__info}>
                                <h4 className={styles.portfolio__title}>{title}</h4>
                                <p className={styles.portfolio__description}>{description}</p>
                                <Link href={link}><a className="button solid">{buttonText}</a></Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PortfolioItem;