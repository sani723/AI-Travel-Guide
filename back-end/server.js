const express = require("express");
const app = express();
const axios = require('axios');
const cors = require('cors');

const PORT = process.env.PORT || 3002;

const base_url = "https://api.openai.com/v1/engines/text-davinci-003/completions";

axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.OPENAI_API_KEY}`;

app.use(express.json());

const corsOptions = {
  origin: 'http://localhost:3000/', // Replace with the domain of your frontend app
  optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors());

app.get("/", (req, res) => {
    res.send("Virtual Travel Guide Server is running!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.post("/travel-query", async (req, res) => {
    try {
        const response = await axios.post(base_url, {
          prompt: req.body.query,
          max_tokens: 150
        });
    
        res.json(response.data.choices[0].text);
      } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
        res.status(500).send('Error processing your request');
      }
});

// To  get destination coordinates 
app.get("/dest-coordinates", async (req, res) => {
  try {
      const locationName = req.query.location;
      const response = await axios.post(base_url, {
        prompt: `Provide the latitude and longitude of ${locationName} as numerical values in an array?`,
        max_tokens: 150
      });
      // const response = await axios.post(base_url, {
      //   prompt: `Provide the latitude and longitude of ${req.body.query} as numerical values in an array?`,
      //   max_tokens: 150
      // });
  
      res.json(response.data.choices[0].text);
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      res.status(500).send('Error processing your request');
    }
});