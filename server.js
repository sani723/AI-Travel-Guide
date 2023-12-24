const express = require("express");
const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Virtual Travel Guide Server is running!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});