const express = require("express");
const app = express();
const product = require("./api/cards");

app.use(express.json({ extended: false }));

app.use("/api/cards", product);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
