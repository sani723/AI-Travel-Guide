import { useState } from 'react';
import axios from 'axios';
import './App.css';
import AiMap from './components/Map';
import Search from './components/Search';

function App() {

  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      
      const result = await axios.post('http://localhost:3002/travel-query', { query });
      setResponse(result.data);
      
      
    } catch (error) {
      console.error('Error fetching travel guide data:', error);
      setResponse('Error fetching response. Please try again.');
    }
  };

  return (
    <div className="App">
      <Search />
      <AiMap />
      <h1>Virtual Travel Guide</h1>
      <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            value={query} 
            onChange={handleInputChange} 
            placeholder="Ask me about travel destinations..." 
          />
          <button type="submit">Get Advice</button>
      </form>

      {response && <div><strong>Travel Guide Response:</strong><p>{response}</p></div>}

    </div>
  );
}

export default App;
