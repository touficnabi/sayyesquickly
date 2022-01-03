import styles from '../styles/PageHero.module.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import Image from 'next/image';

const PageHero = ({text, image}) => {

    const bottom = useRef(null);

    const scrollDown = () => {
        bottom.current.scrollIntoView({behavior: 'smooth'});
    }

    return(
        <>
            <div className={styles.pageHero} style={{backgroundImage: `url('${image}')`}}>
                <Container>
                    <Row>
                        <Col md={12}>
                            <h1 className="title">{text}</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
            <a className={styles.scrollToBelowHero} onClick={scrollDown}>
                <FontAwesomeIcon icon={faAngleDoubleDown} />
            </a>
            <div className={styles.bottom} ref={bottom}></div>
        </>
    );
}

export default PageHero;