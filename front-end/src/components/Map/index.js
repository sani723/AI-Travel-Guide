import { useEffect, useState } from 'react';
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';
import { useSelector } from 'react-redux';

const AiMap = () => {

    //const position = {lat: 25.2048, lng: 55.2708};

    const [position, setPosition] = useState({lat: 25.2048, lng: 55.2708});

    const coordinatesData = useSelector((state) => {
        // Find the latest successful query for the 'getCoordinates' endpoint
        const queries = state.coordinates.queries;
        const latestQuery = Object.values(queries).reduce((latest, current) => {
          if (current.endpointName === 'getCoordinates' && current.status === 'fulfilled') {
            return current.fulfilledTimeStamp > (latest?.fulfilledTimeStamp || 0) ? current : latest;
          }
          return latest;
        }, null);
    
        // Return the data from the latest query
        return latestQuery ? latestQuery.data : null;
      });

      useEffect(() => {

        let parsedCoordinates;
      if (coordinatesData) {
        try {
          parsedCoordinates = JSON.parse(coordinatesData);

          setPosition({
            lat: parsedCoordinates[0], lng: parsedCoordinates[1]
          });

        } catch (error) {
          console.error("Error parsing coordinates data:", error);
        }
      }

      }, [coordinatesData]);


    return (
        <APIProvider apiKey={process.env.REACT_APP_MAP_API_KEY}>
            <Map center={position} zoom={10}>
                <Marker position={position} />
            </Map>
        </APIProvider>
    );
}

export default AiMap;