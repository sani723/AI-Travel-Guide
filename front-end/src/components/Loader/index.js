import { useRef, useEffect } from "react";
import lottie from "lottie-web";

const Loader = () => {

    const container = useRef(null);

    return (
        <div ref={container} id="loading-container"></div>
    );
}


export default Loader;