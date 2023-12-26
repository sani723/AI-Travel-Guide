import { useState } from 'react';
import axios from 'axios';
import "./index.css";

const Search = () => {

    const [query, setQuery] = useState('');
    const [response, setResponse] = useState('');

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const result = await axios.post('http://localhost:3002/dest-coordinates', { query });
          setResponse(result.data);
          const [lat, long] = result.data.replace("[","").replace("]","").split(",");
          
        } catch (error) {
          console.error('Error fetching coordinates:', error);
          setResponse('Error fetching response. Please try again.');
        }
      };

    return (
        <div className="search-wrapper">
            <form onSubmit={handleSubmit}>
                <input type="text" value={query} onChange={handleInputChange} placeholder="Enter Destination" />
            </form>
        </div>
    );
}


export default Search;