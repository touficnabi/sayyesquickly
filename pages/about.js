import Vimeo from "../component/Vimeo";
import VSlider from "../component/VSlider";
import { Container, Row, Col } from "react-bootstrap";
const About = () => {
    return (
        <>
            <Container>
                <Row className="justify-content-center">
                    <Col md={6}>
                        <h1>About</h1>
                        <VSlider />
                    </Col>
                </Row>
            </Container>
        </>
    )

}

export default About;