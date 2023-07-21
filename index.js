const express = require("express")
var bodyParser = require("body-parser")

const urlRouter = require("./routes/url")
const redirectURLRouter = require("./routes/redirect")
const { connectToMongoDB } = require("./connection")
const app = express()

connectToMongoDB("mongodb://localhost:27017/short-url").then(() => {
  console.log("Connected to MongoDB")
})

app.use(bodyParser.json())
app.use("/url", urlRouter)
app.get("/:shortId", redirectURLRouter)

app.listen(8080, () => {
  console.log("Server running on port http://localhost:8080")
})
