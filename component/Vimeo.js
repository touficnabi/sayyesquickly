import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { Col } from 'react-bootstrap';

const Vimeo = () => {
    const videoURL1 = `https://player.vimeo.com/video/49933571?color=e94b35&title=0&byline=0&portrait=0`
    const videoURL2 = `https://player.vimeo.com/video/6853218?color=e94b35&title=0&byline=0&portrait=0`

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: true.valueOf,
        afterChange: index => {console.log(index)}
    };

    return(
        <>
            <Slider {...settings}>
                <Col md={6}>
                    <h1 className="title" style={{fontSize: '12px !important'}}>Beautiful Faces</h1>
                    <div style={{padding:'56.25% 0 0 0',position:'relative', marginBottom: '-0%'}}>
                        <iframe src={videoURL1} style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
                    </div>
                 </Col>
                 <Col md={6}>
                    <h1 className="title" style={{fontSize: '12px !important'}}>Two Spirits</h1>
                    <div style={{padding:'56.25% 0 0 0',position:'relative', marginBottom: '-0%'}}>
                        <iframe src={videoURL2} style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
                    </div>
                 </Col>
                 <Col md={6}>
                    <h1 className="title" style={{fontSize: '12px !important'}}>Beautiful Faces</h1>
                    <div style={{padding:'56.25% 0 0 0',position:'relative', marginBottom: '-0%'}}>
                        <iframe src={videoURL1} style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
                    </div>
                 </Col>
                 <Col md={6}>
                    <h1 className="title" style={{fontSize: '12px !important'}}>Two Spirits</h1>
                    <div style={{padding:'56.25% 0 0 0',position:'relative', marginBottom: '-0%'}}>
                        <iframe src={videoURL2} style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
                    </div>
                 </Col>
             </Slider>
            <script src="https://player.vimeo.com/api/player.js"></script> 
        </>
    )
}

export default Vimeo;