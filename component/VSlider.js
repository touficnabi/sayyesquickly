import gsap from "gsap";
import { useRef, useState } from "react";
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Bface from '../public/img/beautiful-faces-still-1.jpeg';
import Tspirit from '../public/img/two-sp-banner.jpeg';

const VSlider = () => {

    const slide1 = useRef(null)
    const slide2 = useRef(null)

    const [bfActive, setBfActive] = useState(true);
    const [showVid, setShowVid] = useState({
        bf: false,
        ts: false
    });

    const playIconStyle = {
        width:'80px',
        color: '#ffffeb',
        position: 'absolute',
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)', 
        zIndex: 99, 
        filter: 'drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.4))'
    }

    const slideLeft = () => {
        setBfActive(prevState => !prevState);
        setShowVid({bf: false, ts: false});
                
        if (bfActive){
            gsap.to(slide1.current, {x: 500, alpha: 0, display: 'none'})
            gsap.fromTo(slide2.current, {x: -500, alpha: 0, display: 'none'}, {x: 0, alpha: 1, display: 'block'})
        } else {
            gsap.to(slide2.current, {x: 500, alpha: 0, display: 'none'})
            gsap.fromTo(slide1.current, {x: -500, alpha: 0, display: 'none'}, {x: 0, alpha: 1, display: 'block'})
        }
    }
    const slideRight = () => {
        setBfActive(prevState => !prevState);
        setShowVid({bf: false, ts: false});

        if (bfActive){
            gsap.to(slide1.current, {x: -500, alpha: 0, display: 'none'})
            gsap.fromTo(slide2.current, {x: 500, alpha: 0, display: 'none'}, {x: 0, alpha: 1, display: 'block'})
        } else {
            gsap.to(slide2.current, {x: -500, alpha: 0, display: 'none'})
            gsap.fromTo(slide1.current, {x: 500, alpha: 0, display: 'none'}, {x: 0, alpha: 1, display: 'block'})
        }
    }
    return(
        <>        
            <div className="slider" style={{width: '100%', paddingBottom: '50%'}}>
                <button area-label='Slide Video Left' className="btn leftBtn" onClick={slideLeft}><FontAwesomeIcon icon={faAngleDoubleLeft} /></button>
                <button aria-label="Slide Video Right" className="btn rightBtn" onClick={slideRight}><FontAwesomeIcon icon={faAngleDoubleRight} /></button>
                <div ref={slide1} className={bfActive ? 'slide active': 'slide'}>
                    <h1 className="title">Beautiful Faces</h1>
                    <div style={{padding:'56.25% 0 0 0',position:'relative', marginBottom: '-0%'}}>
                        {showVid.bf ? 
                            ( <iframe loading="lazy" title="Watch Beautiful Faces" src={`https://player.vimeo.com/video/49933571?color=e94b35&title=0&byline=0&portrait=0&autoplay=1`} style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe> ) 
                            : (<span style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} onClick={() => setShowVid({bf: true, ts: false})}>
                                <FontAwesomeIcon icon={faPlayCircle} style={playIconStyle} />
                                <Image src={Bface} alt="Watch Beautiful Faces" />
                            </span>)}
                        {/* <iframe loading="lazy" title="Watch Beautiful Faces" src={`https://player.vimeo.com/video/49933571?color=e94b35&title=0&byline=0&portrait=0`} style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe> */}
                    </div>
                </div>

                <div ref={slide2} className={!bfActive ? 'slide active' : 'slide'} style={{display:'none'}}>
                    <h1 className="title">Two Spirits</h1>
                    <div style={{padding:'56.25% 0 0 0',position:'relative', marginBottom: '-0%'}}>
                        {showVid.ts ?  (<iframe loading="lazy" title="Watch Two Spirits" src={`https://player.vimeo.com/video/6853218?color=e94b35&title=0&byline=0&portrait=0&autoplay=1`} style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>)
                         : (<span style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} onClick={() => setShowVid({bf: false, ts: true})}>
                                <FontAwesomeIcon icon={faPlayCircle} style={playIconStyle} />
                                <Image src={Tspirit} alt="Watch Two Spirits" />
                            </span>)}
                        {/* <iframe loading="lazy" title="Watch Two Spirits" src={`https://player.vimeo.com/video/6853218?color=e94b35&title=0&byline=0&portrait=0`} style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default VSlider;