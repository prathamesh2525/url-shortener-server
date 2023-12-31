const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")


const urlRouter = require("./routes/url")
const redirectURLRouter = require("./routes/redirect")
const { connectToMongoDB } = require("./connection")
const app = express()

connectToMongoDB("mongodb://localhost:27017/short-url").then(() => {
  console.log("Connected to MongoDB")
})

app.use(cors())
app.use(bodyParser.json())
app.use("/url", urlRouter)

app.get("/", (req, res) => {
  res.json({ message: "Server Running..." })
})

app.get("/:shortId", redirectURLRouter)

app.listen(8080, () => {
  console.log("Server running on port http://localhost:8080")
})
