import PageHero from "../component/PageHero";
import HeroImage from '../public/img/contact-hero.jpeg';
import styles from '../styles/Contact.module.scss';
import { TextField } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Parallax } from "react-parallax";
import Link from 'next/link';
import { GoogleReCaptcha, GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import axios from "axios";
import Head from 'next/head';
import Loader from "../component/Loader";
import gsap from "gsap";
import renderHTML from "react-render-html";

const theme = createTheme({
    palette: {
        primary: {
            main: '#ffffeb'
        },
        secondary: {
            main: '#e94b35'
        }
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
    typography: {
        fontFamily: 'Raleway, sans-serif'
    },
})

const Contact = ({content}) => {

    const recaptcha_key = process.env.NODE_ENV === "Production" ? process.env.REACT_API_RECAPTCHA_PROD : process.env.REACT_API_RECAPTCHA_STAGE;

    const [ recaptcha, setRecaptcha ] = useState(null);
    const [ name, setName ] = useState("");
    const [ phone, setPhone ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ subject, setSubject ] = useState("");
    const [ message, setMessage ] = useState("");
    const [ formSubmitting, setFormSubmitting ] = useState(false);
    const [ formSuccess, setFormSuccess ] = useState(false);
    const [ error, setError ] = useState({
        nameError : "",
        phoneError : "",
        emailError : "",
        messageError : ""
    });

    const validateEmail = emailaddress => (emailaddress) ? emailaddress.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) : false;

    const validate = () => {
        let nameError = "";
        let phoneError = "";
        let emailError = "";
        let messageError = "";
        
        if (name === "" || name === null) nameError = "Please enter your name";
        if (phone === "" || phone === null) phoneError = "Please enter a phone number";
        if (!validateEmail(email)) emailError = "Please enter a valid email address";
        if (message === "" || message === null) messageError = "Please enter your message";

        
        if (nameError !== "" || phoneError !== "" || emailError !== "" || messageError !== "") {
            setError({
                nameError,
                phoneError,
                emailError,
                messageError
            })
            return false;
        }

        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('name', name);
        formData.append('phone', phone);
        formData.append('email', email);
        formData.append('subject', subject);
        formData.append('message', message);
        
        if (recaptcha) {
            
            const handlereUrl = "https://sayyesquickly.net/contact.php";
            
            const validated = validate();
            
            if (validated) {
                setFormSubmitting(true);
                axios.post(handlereUrl, formData)
                    .then(res => {
                        if (res.status === 200) {
                            setFormSubmitting(false);
                            setName("");
                            setPhone("");
                            setEmail("");
                            setSubject("");
                            setMessage("");
                            setFormSuccess(true);
                        }
                    })
                    .catch(err => console.log('error', err))
            }
        }  
    }

    const thankyou = useRef(null);

    useEffect(() => {
        if (formSuccess) {
            gsap.to(thankyou.current, {alpha: 1, display: "block", visibility: 'visible', duration: .3})
        } else {
            gsap.to(thankyou.current, {alpha: 0, display: "none", visibility: 'hidden', duration: .3})
        }
    }, [formSuccess])

    return (
        <GoogleReCaptchaProvider reCaptchaKey="6Ld4f_kdAAAAAJrEzYJBGn1a78S3cilBFGux5FPg">
            <Head>
                <title>Contact Russell Martin - SayYesQuickly</title>
            </Head>
            <main>
                <PageHero text="Contact" image={HeroImage} /> 
                <section className={styles.contact_form}>
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg={8}>
                                <ThemeProvider theme={theme}>
                                    <form className={styles.form} action="" onSubmit={handleSubmit}>
                                        {formSubmitting && <div className={styles.form_progress_overlay}></div>}
                                        <div className={styles.form_fields}>
                                            <TextField onChange={(e) => setName(e.target.value)} onKeyDown={() => setError({...error, nameError: ""})} label="Name" variant="filled" type="text" name="name" helperText={error.nameError} error={error.nameError !== ""} value={name} />
                                            <TextField onChange={(e) => setPhone(e.target.value)} onKeyDown={() => setError({...error, phoneError: ""})} label="Phone" variant="filled" type="phone" name="phone" helperText={error.phoneError} error={error.phoneError !== ""} value={phone} />
                                            <TextField onChange={(e) => setEmail(e.target.value)} onKeyDown={() => setError({...error, emailError: ""})} label="Email" variant="filled" type="email" name="email" helperText={error.emailError} error={error.emailError !== ""} value={email} />
                                            <TextField onChange={(e) => setSubject(e.target.value)} label="Subject" variant="filled" type="subject" name="subject" value={subject} />
                                        </div>
                                        <TextField onChange={(e) => setMessage(e.target.value)} onKeyDown={() => setError({...error, messageError: ""})} label="Message" variant="filled" minRows={3} maxRows={7} name="message" multiline helperText={error.messageError} error={error.messageError !== ""} value={message} />
                                        <GoogleReCaptcha onVerify={(val) => setRecaptcha(val)} />
                                        <a onClick={handleSubmit} className="button solid red text-center" style={formSubmitting ? {lineHeight: 0}:{}}>
                                            {formSubmitting && <Loader color="#ffffeb" size={90} />}
                                            {!formSubmitting && <span>Submit</span>}
                                        </a>
                                    </form>
                                </ThemeProvider>
                            </Col>
                        </Row>
                    </Container>
                </section>  

                <section className={`${styles.russell} no-padding`}>
                    <Parallax bgImage="./img/ute-mountain.jpeg" strength={240} renderLayer={percentage => ( <div data-percentage={percentage} /> )}>
                        <Container>
                            <Row className="justify-content-center">
                                <Col md={9}>
                                    <div className={styles.russell_box}>
                                        <h5 className="text-center">{renderHTML(content.content.rendered)}</h5>
                                        <div className="flex-center">
                                            <Link href="/news"><a className="button solid mt-4">News</a></Link>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Parallax>
                </section> 

                {/* {Thank you popup} */}
                <div ref={thankyou} className={styles.thankyou_popup} style={{display: 'none', opacity: 0, visibility: 'hidden'}}>
                    <div className="popup_inner">
                        <h2>Thank You!</h2>
                        <p>Your message has been received.</p>
                        <a className="button solid alt-green text-center" onClick={() => setFormSuccess(false)}>Close</a>
                    </div>    
                </div>
            </main>    
        </GoogleReCaptchaProvider> 
    )
}

export const getStaticProps = async () => {
    const res = await fetch('https://cms.sayyesquickly.net/wp-json/wp/v2/pages/314');
    const content = await res.json();

    return {
        props: {
            content
        },
        revalidate: 10
    }
}

export default Contact;