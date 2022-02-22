//IMPORTS
import express from "express"
import { __dirname } from "./utils.js"

//VARIABLES
const app = express()
const PORT = process.env.PORT || 8080
const server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})

//APP.USE
app.use(express.static(__dirname + "/public"))

//APP.GET
app.get("/info", (req, res) => {
    res.send({message: `Port ${PORT}`})
})