const express = require("express");
const app = express();
const cards = require("./api/cards");

app.use(express.json({ extended: false }));

app.use("/api/cards", cards);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
