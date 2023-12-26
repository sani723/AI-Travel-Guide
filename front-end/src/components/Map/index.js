import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';

const AiMap = () => {

    const position = {lat: 25.2048, lng: 55.2708};
    

    return (
        <APIProvider apiKey={process.env.REACT_APP_MAP_API_KEY}>
            <Map center={position} zoom={10}>
                <Marker position={position} />
            </Map>
        </APIProvider>
    );
}

export default AiMap;