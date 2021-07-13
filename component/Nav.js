import { useEffect, useRef } from 'react';
import Styles from '../styles/Nav.module.scss';
import {Navbar, Container} from 'react-bootstrap';
import gsap from 'gsap';
import Image from 'next/image';
import Logo from '../public/img/logo.jpeg';
import Link from 'next/link';

export default function Nav() {
    const logoImg = useRef(null);
    const nav1 = useRef(null);
    const nav2 = useRef(null);
    const navbar = useRef(null);

    useEffect(() => {
        gsap.to(navbar.current, {backgroundColor: '#ffffeb', scrollTrigger: {
            trigger: 'header',
            start: 'top top',
            scrub: true,
            end: '+=300px'
        }})
        gsap.to(nav1.current, {x: -67, color: '#485543', scrollTrigger: {
            trigger: 'header',
            start: 'top top',
            scrub: true,
            end: '+=300px'
        }})
        gsap.to(nav2.current, {x: 52, color: '#485543', scrollTrigger: {
            trigger: 'header',
            start: 'top top',
            scrub: true,
            end: '+=300px'
        }})
        gsap.from(logoImg.current, { y: '-170%', scrollTrigger:{
            trigger: 'header',
            start: 'top top',
            scrub: true,
            end: '+=300px'
        } })
    }, [])
    return(
        <header className={Styles.header}>
            <a className="top" id="top"></a>
            <Navbar ref={navbar} className={`${Styles.navbar} p-0`}>
                <Container className="justify-content-center">
                    <ul ref={nav1} className={`${Styles.main_nav} ${Styles.nav_1}`}>
                        <li className={Styles.nav_item}><Link href="/">Home</Link></li>
                        <li className={Styles.nav_item}><Link href="/who-we-are">Who We Are</Link></li>
                        <li className={Styles.nav_item}><Link href="/russell-martin">Russell Martin</Link></li>
                    </ul>
                    <div ref={logoImg} className={`${Styles.logo} logo`}><Image src={Logo} alt="Say Yes Quickly Logo" styles={{borderBottomRightRadius: '4px', borderBottomLeftRadius: '4px'}} /></div>
                    {/* <img ref={logoImg} src="img/logo.jpeg" alt="Say Yes Quickly Logo" className={`${Styles.logo} logo`} /> */}
                    <ul ref={nav2} className={`${Styles.main_nav} ${Styles.nav_2}`}>
                        <li className={Styles.nav_item}><Link href="/news">News</Link></li>
                        <li className={Styles.nav_item}><Link href="/books">Books</Link></li>
                        <li className={Styles.nav_item}><Link href="/films">Films</Link></li>
                        <li className={Styles.nav_item}><Link href="/#">Articles</Link></li>
                    </ul>
                </Container>
            </Navbar>
        </header>
    )
}