import { Carousel } from "react-bootstrap";
import { useState } from "react";

const Vimeo = (props) => {
    const { videoID } = props;
    const videoURL1 = `https://player.vimeo.com/video/${videoID}?color=e94b35&title=0&byline=0&portrait=0`
    const videoURL2 = `https://player.vimeo.com/video/6853218?color=e94b35&title=0&byline=0&portrait=0`

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return(
        <>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <div style={{padding:'56.25% 0 0 0',position:'relative', marginBottom: '-25%'}}>
                        <iframe src={videoURL1} style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{padding:'56.25% 0 0 0',position:'relative', marginBottom: '-25%'}}>
                        <iframe src={videoURL2} style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{padding:'56.25% 0 0 0',position:'relative', marginBottom: '-25%'}}>
                        <iframe src={videoURL2} style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </Carousel.Item>
            </Carousel>
            {/* <div style={{padding:'56.25% 0 0 0',position:'relative', marginBottom: '-25%'}}>
                <iframe src={videoURL} style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
            </div> */}
            <script src="https://player.vimeo.com/api/player.js"></script> 
        </>
    )
}

export default Vimeo;