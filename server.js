const express = require("express");
const app = express();
const axios = require('axios');
const PORT = process.env.PORT || 3002;

axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.OPENAI_API_KEY}`;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Virtual Travel Guide Server is running!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.post("/travel-query", async (req, res) => {
    try {
        const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
          prompt: req.body.query,
          max_tokens: 150
        });
    
        res.json(response.data.choices[0].text);
      } catch (error) {
        res.status(500).send('Error processing your request');
      }
});