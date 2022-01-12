import PageHero from "../component/PageHero";
import HeroImage from '../public/img/contact-hero.jpeg';
import styles from '../styles/Contact.module.scss';
import { TextField } from "@mui/material";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Parallax } from "react-parallax";
import Link from 'next/link';
import { GoogleReCaptcha, GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import axios from "axios";
import Head from 'next/head';

const Contact = () => {

    const recaptcha_key = process.env.NODE_ENV === "Production" ? process.env.REACT_API_RECAPTCHA_PROD : process.env.REACT_API_RECAPTCHA_STAGE;

    const [ recaptcha, setRecaptcha ] = useState(null);
    const [ errorMessage, setErrorMessage ] = useState(null);
    const [ name, setName ] = useState("");
    const [ phone, setPhone ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ subject, setSubject ] = useState("");
    const [ message, setMessage ] = useState("");
    const [ formSubmitting, setFormSubmitting ] = useState(false);
    const [ error, setError ] = useState({
        nameError : "",
        phoneError : "",
        emailError : "",
        messageError : ""
    })

    const formInProgressStyle = {
        opacity: '.4',
        cursor: 'pointer'
    }

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
            
            console.log( 'validate', validate())
            const validated = validate();
            
            if (validated) {
                setFormSubmitting(true);
                axios.post(handlereUrl, formData)
                    .then(res => {
                        console.log('res', res);
                        if (res.status === 200) {
                            setFormSubmitting(false)
                        }
                    })
                    .catch(err => console.log('error', err))
            }
        }  
    }

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
                                <form className={styles.form} action="" onSubmit={handleSubmit} style={formSubmitting ? formInProgressStyle : {}}>
                                    <TextField onChange={(e) => setName(e.target.value)} id="filled-basic" label="Name" variant="filled" type="text" name="name" helperText={error.nameError} error={error.nameError !== ""} />
                                    <TextField onChange={(e) => setPhone(e.target.value)} label="Phone" variant="filled" type="phone" name="phone" helperText={error.phoneError} error={error.phoneError !== ""} />
                                    <TextField onChange={(e) => setEmail(e.target.value)} label="Email" variant="filled" type="email" name="email" helperText={error.emailError} error={error.emailError !== ""} />
                                    <TextField onChange={(e) => setSubject(e.target.value)} label="Subject" variant="filled" type="subject" name="subject" />
                                    <TextField onChange={(e) => setMessage(e.target.value)} label="Message" variant="filled" minRows={3} maxRows={7} name="message" multiline helperText={error.messageError} error={error.messageError !== ""} />
                                        <GoogleReCaptcha onVerify={(val) => setRecaptcha(val)} />
                                    <a onClick={handleSubmit} className="button solid red text-center">Submit</a>
                                </form>
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
                                        <h5 className="text-center">Russell Martin is known for synthesizing the historic and contemporary elements of filmed and written stories, grounding narrative in careful research, and making complex ideas readily comprehensible and deeply humane.</h5>
                                        <div className="flex-center">
                                            <Link href="/news"><a className="button solid mt-4">News</a></Link>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Parallax>
                </section> 
            </main>    
        </GoogleReCaptchaProvider> 
    )
}

export default Contact;