const express = require("express")
const app = express()
const cors = require("cors")
const server = require("http").Server(app)
const routes = require("./routes")
const {conn} = require("./startup/db")
conn()
const initialize = () => {
  const PORT = process.env.PORT || 5000;
  app.use(cors())
  app.use(express.json())
  app.use("/", require("./routes/testRoute"))
  app.use("/api", routes)

  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
  .on("error", (err) => {
    if(err.errno === "EADDRINUSE") {
      console.log(`Port ${PORT} is already in use, trying with another port ${PORT + 1}`)
      app.listen(PORT + 1)
    }
    else {
      console.log(`Error in server: ${err}`)
      process.exit(1);
    }
  })
}

initialize();
