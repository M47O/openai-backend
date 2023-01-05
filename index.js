const express = require("express")
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const openaiRoutes = require("./routes/openaiRoutes")
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/openai', openaiRoutes)


app.listen(port, () => console.log(`Server started on port ${port}.`));