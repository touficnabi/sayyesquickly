import PageHero from "./PageHero";
import { Container, Row, Col } from "react-bootstrap";
import Head from "next/head";

const FilmPage = ({film, image, filmID}) => {
    return (
        <>
            <Head>
                <title>{`Watch ${film} - Say Yes Quickly Production`}</title>
            </Head>
            <PageHero text={`Watch ${film}`} image={image} />
            <main>
                <section>
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div style={{padding:'56.25% 0 0 0',position:'relative', marginBottom: '-0%'}}>
                                    <iframe title={`Watch ${film}`} src={`https://player.vimeo.com/video/${filmID}?color=e94b35&title=0&byline=0&portrait=0`} style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </main>
        </>
    )
}

export default FilmPage;