
const express = require("express");
const cors = require("cors");
const dbConfig = require("./db");
const {envVariable} = require("./utils");

const app = express();
app.use(cors()).use(express.json());


  // Catch 404 routes
app.all("*", (req, res, next) => {
    res.status(404).json({
    status: 404,
    message: `This route ${req.originalUrl} does not exist`
  })
})


async function startServer() {
  await dbConfig()
  app.listen(envVariable.PORT, () => {
    console.log(`Server listening on ${envVariable.PORT}`);
  });
}

startServer()