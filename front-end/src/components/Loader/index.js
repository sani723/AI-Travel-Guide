import { useRef, useEffect } from "react";
import lottie from "lottie-web";
import { current } from "@reduxjs/toolkit";

const Loader = () => {

    const container = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            animationData: require('./loading.json'),
            autoplay: true,
            container: container.current,
            loop: true,
            renderer: "svg"
        });
    }, []);

    return (
        <div ref={container} id="loading-container"></div>
    );
}


export default Loader;