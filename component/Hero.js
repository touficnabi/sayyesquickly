import Styles from '../styles/Hero.module.scss';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

function Hero (){
    const heroLogo = useRef(null);
    useEffect(() => {
        gsap.to(heroLogo.current, {alpha: 0, scrollTrigger: {
            trigger: 'header',
            start: 'top top',
            scrub: true,
        }})
    }, [])
    return(
        <section className={Styles.hero}>
            <img ref={heroLogo} src="img/logo.jpeg" alt="" />
        </section>
    )
}

export default Hero;