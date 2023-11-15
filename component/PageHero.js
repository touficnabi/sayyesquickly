import { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap';
import styles from '../styles/PageHero.module.scss';

const PageHero = ({text, image}) => {

    const bottom = useRef(null);
    const bg = useRef(null);

    const scrollDown = () => {
        bottom.current.scrollIntoView({behavior: 'smooth'});
    }

    useEffect(() => {
        gsap.to(bg.current, {backgroundPositionY : 130, scrollTrigger : {
            trigger: '.very-top',
            start: 'top top',
            scrub: true,
            end: '+=380'
        }})
    }, [])

    return(
        <>
            <div ref={bg} className={styles.pageHero} style={ typeof image === "object" ? {backgroundImage: `url('${image.src}')`} : {backgroundImage: `url('${image}')`}}>
                <Container>
                    <Row>
                        <Col md={12}>
                            <h1 className="title" dangerouslySetInnerHTML={{__html: text}} />
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