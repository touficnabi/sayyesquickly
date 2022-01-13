import { Container, Row, Col } from "react-bootstrap";
import styles from '../styles/PortfolioItem.module.scss';
import Image from 'next/image';
// import Link from 'next/link';

const PortfolioItem = ({reversed, book, name, image, bookUrl, children}) => {
    if (book){
        return(
            <div itemScope itemType="https://schema.org/Book" className={ reversed ? `${styles.portfolio} ${styles.reversed}` : styles.portfolio} style={book? {padding: '100px 0', margin : '0'} : ''} >
                <Container fluid className={styles.book}>
                    <Row className="justify-content-center">
                        <Col md={10}>
                            <div className={styles.wrapper}>

                                <h1 className="hidden"><span itemProp="name">{name}</span></h1>
                                <h2 className="hidden">Author: <span itemProp="author" itemScope itemType="https://schema.org/Person" itemID={bookUrl}>Russell Martin</span></h2>

                                <div className={`${styles.portfolio__image} mb-5 mb-lg-0`}>
                                    <div data-name={name}>
                                        <Image itemProp="image" src={image} alt={name} />
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