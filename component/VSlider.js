import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const VSlider = () => {

    const slide1 = useRef(null)
    const slide2 = useRef(null)

    const [bfActive, setBfActive] = useState(true);

    const slideLeft = () => {
        setBfActive(prevState => !prevState);
                
        if (bfActive){
            gsap.to(slide1.current, {x: -500, alpha: 0, display: 'none'})
            gsap.fromTo(slide2.current, {x: 500, alpha: 0, display: 'none'}, {x: 0, alpha: 1, display: 'block'})
        } else {
            gsap.to(slide2.current, {x: -500, alpha: 0, display: 'none'})
            gsap.fromTo(slide1.current, {x: 500, alpha: 0, display: 'none'}, {x: 0, alpha: 1, display: 'block'})
        }
    }
    const slideRight = () => {
        setBfActive(prevState => !prevState);

        if (bfActive){
            gsap.to(slide1.current, {x: 500, alpha: 0, display: 'none'})
            gsap.fromTo(slide2.current, {x: -500, alpha: 0, display: 'none'}, {x: 0, alpha: 1, display: 'block'})
        } else {
            gsap.to(slide2.current, {x: 500, alpha: 0, display: 'none'})
            gsap.fromTo(slide1.current, {x: -500, alpha: 0, display: 'none'}, {x: 0, alpha: 1, display: 'block'})
        }
    }

    useEffect(() => {

    }, [])
    return(
        <>        
            <div className="slider" style={{width: '100%', paddingBottom: '50%'}}>
                <button style={{position: 'absolute', left: '-20%', top: '100%', transform: 'translateY(-50%)'}} onClick={slideLeft}>Prev</button><button style={{position: 'absolute', right: '-20%', top: '100%', transform: 'translateY(-50%)'}} onClick={slideRight}>Next</button>
                <div ref={slide1} className={bfActive ? 'slide active': 'slide'}>
                    <h1 className="title">Beautiful Faces</h1>
                    <div style={{padding:'56.25% 0 0 0',position:'relative', marginBottom: '-0%'}}>
                        <iframe src={`https://player.vimeo.com/video/49933571?color=e94b35&title=0&byline=0&portrait=0`} style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>

                <div ref={slide2} className={!bfActive ? 'slide active' : 'slide'}>
                    <h1 className="title">Two Spirits</h1>
                    <div style={{padding:'56.25% 0 0 0',position:'relative', marginBottom: '-0%'}}>
                        <iframe src={`https://player.vimeo.com/video/6853218?color=e94b35&title=0&byline=0&portrait=0`} style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VSlider;