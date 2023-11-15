import Head from "next/head";
import renderHTML from 'react-render-html';
import { Container, Row, Col } from 'react-bootstrap';

const Custom404 = ({pageContent}) => {
    return (
        <>
            <Head>
                <title>Sorry! The page is not available - SayYesQuickly</title>
            </Head>
            <main style={{marginTop: 79}}>
                <section>
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className="text-center">
                                    {renderHTML(pageContent.content.rendered)}    
                                </div> 
                            </Col>
                        </Row>
                    </Container>
                </section>
            </main>
        </>
    )
}

export const getStaticProps = async () => {
    const custom404 = await fetch('https://cms.sayyesquickly.net/wp-json/wp/v2/pages/318');
    const pageContent = await custom404.json();

    return {
        props: {
            pageContent
        },
        revalidate: 10
    }
}

export default Custom404;