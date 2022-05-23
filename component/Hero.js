import Styles from '../styles/Hero.module.scss';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Logo from '../public/img/logo.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

function Hero ({homepageData}){
    const heroLogo = useRef(null);
    const bottom = useRef(null)
    
    useEffect(() => {
        gsap.to(heroLogo.current, {alpha: 0, scrollTrigger: {
            trigger: '.very-top',
            start: 'top top',
            scrub: true,
            end: '+=300px'
        }});
    }, [])

    const scrollDown = () => {
        bottom.current.scrollIntoView({behavior: 'smooth'});
    }

    return(
        <section className={Styles.hero}>
            <span ref={heroLogo} style={{display: 'flex', flexDirection: 'column'}}>
                <Image src={Logo} alt="Say Yes Quickly" />
            </span>
            {/* <h3>Russell Martin<br/>Author, Filmmaker, Publishing Coach</h3> */}
            <div className={Styles.hero_text} dangerouslySetInnerHTML={{__html: homepageData.acf.hero_text}} />
            <a className={Styles.scrollToBelowHero} onClick={scrollDown} ref={heroLogo}>
                <FontAwesomeIcon icon={faAngleDoubleDown} />
            </a>
            <div className={Styles.bottom} ref={bottom}></div>
        </section>
    )
}

export default Hero;