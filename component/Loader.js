const Loader = ({ size, color }) => {
    const width = size + 'px';
    const height = size/7 + 'px';

    const bubbleStyle = () => {
        let st = {}
        if (color) {
            if (size){
                let st = {
                    background: color,
                    width: height,
                    height: height
                 }
                 return st;
            } else {
                let st = {background: color}
                return st;
            }
        } 
        return st;
    }

    return (
        <div className="loadingio-spinner-bars-rhbsl7mk1na loading-bubble" style={size? {width, height} : {}}>
            <div className="ldio-o87y3w0la78">
                <div style={bubbleStyle()}></div>
                <div style={bubbleStyle()}></div>
                <div style={bubbleStyle()}></div>
                <div style={bubbleStyle()}></div>
            </div>
        </div>
    )
}

export default Loader;