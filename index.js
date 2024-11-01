// index.js
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello from Node.js backend!");
});

app.post("/api/data", (req, res) => {
    const data = req.body;
    res.send({ message: "Data received!", data });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
