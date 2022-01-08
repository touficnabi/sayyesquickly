import PageHero from "../component/PageHero";
import HeroImage from '../public/img/contact-hero.jpeg';
import styles from '../styles/Contact.module.scss';
import { TextField } from "@mui/material";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Parallax } from "react-parallax";
import Link from 'next/link';
import { GoogleReCaptcha, GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const Contact = () => {
    const [ name, setName ] = useState(null);
    const [ phone, setPhone ] = useState(null);
    const [ email, setEmail ] = useState(null);
    const [ subject, setSubject ] = useState(null);
    const [ message, setMessage ] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            "name": name,
            "phone" : phone,
            "email" : email,
            "subject" : subject,
            "message" : message
        })
    }
    
    return (
        <GoogleReCaptchaProvider reCaptchaKey="6Ld4f_kdAAAAAJrEzYJBGn1a78S3cilBFGux5FPg">
        <>
            <main>
                <PageHero text="Contact" image={HeroImage} /> 
                <section className={styles.contact_form}>
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg={8}>
                                <form className={styles.form} action="" onSubmit={handleSubmit}>
                                    <TextField onChange={(e) => setName(e.target.value)} id="filled-basic" label="Name" variant="filled" type="name" value={name} />
                                    <TextField onChange={(e) => setPhone(e.target.value)} id="filled-basic" label="Phone" variant="filled" type="phone" value={phone} />
                                    <TextField onChange={(e) => setEmail(e.target.value)} id="filled-basic" label="Email" variant="filled" type="email" value={email} />
                                    <TextField onChange={(e) => setSubject(e.target.value)} id="filled-basic" label="Subject" variant="filled" type="subject" value={subject} />
                                    <TextField onChange={(e) => setMessage(e.target.value)} id="filled-basic" label="Message" variant="filled" value={message} rows={5} maxRows={4} multiline />
                                        <GoogleReCaptcha onVerify={(val) => console.log('recap', sval)} />
                                    <a onClick={handleSubmit} className="button solid red text-center">Submit now</a>
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
                                            <Link href="/news"><a className="button solid mt-4">News -2</a></Link>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Parallax>
                </section> 
            </main>    
        </>
        </GoogleReCaptchaProvider> 
    )
}

export default Contact;