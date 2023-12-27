import { useState } from 'react';
import axios from 'axios';
import "./index.css";

import { useLazyGetCoordinatesQuery } from "../../services/coordinates";


const Search = () => {

    const [query, setQuery] = useState('');
    const [locationName, setLocationName] = useState('');
    const [response, setResponse] = useState('');

    const [ trigger, {data, error, isLoading, isSuccess }] = useLazyGetCoordinatesQuery(locationName);

    const handleInputChange = (event) => {
        //setQuery(event.target.value);
        setLocationName(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
       
          // const result = await axios.post('http://localhost:3002/dest-coordinates', { query });
          // setResponse(result.data);
          // const [lat, long] = result.data.replace("[","").replace("]","").split(",");

          trigger(locationName); 
          //const [latitude, longitude] = data.replace("[","").replace("]","").split(",");

    
      };

    return (
        <div className="search-wrapper">
            <form onSubmit={handleSubmit}>
                <input type="text" value={locationName} onChange={handleInputChange} placeholder="Enter Destination" />
            </form>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {/* {data && (
                <p>Coordinates: Latitude {latitude}, Longitude {longitude}</p>
            )} */}
        </div>
    );
}


export default Search;