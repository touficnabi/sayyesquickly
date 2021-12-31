import { useEffect, useRef, useState } from 'react';
import Styles from '../styles/Nav.module.scss';
import {Navbar, Container} from 'react-bootstrap';
import gsap from 'gsap';
import Image from 'next/image';
import Logo from '../public/img/logo.jpeg';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Nav() {
    const logoImg = useRef(null);
    const nav1 = useRef(null);
    const nav2 = useRef(null);
    const navbar = useRef(null);

    const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false)

    const isMobile = useMediaQuery({ query: `(max-width: 990px)` });

    useEffect(() => {
        if (!isMobile){
            gsap.to(navbar.current, {backgroundColor: '#ffffeb', scrollTrigger: {
                trigger: '.very-top',
                start: 'top top',
                scrub: true,
                end: '+=300px'
            }})
            gsap.to(nav1.current, {x: -60, color: '#485543', scrollTrigger: {
                trigger: '.very-top',
                start: 'top top',
                scrub: true,
                end: '+=300px'
            }})
            gsap.to(nav2.current, {x: 53, color: '#485543', scrollTrigger: {
                trigger: '.very-top',
                start: 'top top',
                scrub: true,
                end: '+=300px'
            }})
            gsap.from(logoImg.current, { y: '-170%', scrollTrigger:{
                trigger: '.very-top',
                start: 'top top',
                scrub: true,
                end: '+=300px'
            } })
        }
    }, [isMobile])

    const mobile_nav_open = () => {
        setMobileNavIsOpen(!mobileNavIsOpen);
    }

    return(
        <>
            <div className="very-top"></div>
            <header className={Styles.header}>
                <a className="top" id="top"></a>
                <a className={Styles.mobile_nav} onClick={mobile_nav_open}>
                    {!mobileNavIsOpen ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faTimes} />}
                </a>
                <Navbar ref={navbar} className={ !mobileNavIsOpen ? `${Styles.navbar} p-0` : `${Styles.navbar} p-0 ${Styles.mobile_open}`}>
                    <Container className="justify-content-center">
                        <ul ref={nav1} className={`${Styles.main_nav} ${Styles.nav_1}`}>
                            <li className={Styles.nav_item} onClick={mobile_nav_open}><Link href="/">Home</Link></li>
                            <li className={Styles.nav_item} onClick={mobile_nav_open}><Link href="/who-we-are">Who We Are</Link></li>
                            <li className={Styles.nav_item} onClick={mobile_nav_open}><Link href="/russell-martin">Russell Martin</Link></li>
                        </ul>
                        <div ref={logoImg} className={`${Styles.logo} logo`}><Image src={Logo} alt="Say Yes Quickly Logo" styles={{borderBottomRightRadius: '4px', borderBottomLeftRadius: '4px'}} /></div>
                        {/* <img ref={logoImg} src="img/logo.jpeg" alt="Say Yes Quickly Logo" className={`${Styles.logo} logo`} /> */}
                        <ul ref={nav2} className={`${Styles.main_nav} ${Styles.nav_2}`}>
                            <li className={Styles.nav_item} onClick={mobile_nav_open}><Link href="/news">News</Link></li>
                            <li className={Styles.nav_item} onClick={mobile_nav_open}><Link href="/books">Books</Link></li>
                            <li className={Styles.nav_item} onClick={mobile_nav_open}><Link href="/films">Films</Link></li>
                            <li className={Styles.nav_item} onClick={mobile_nav_open}><Link href="/#">Articles</Link></li>
                        </ul>
                    </Container>
                </Navbar>
            </header>
        </>
    )
}