const express = require("express");
const cors = require("cors");
//const dbConfig = require("./db");
const {envVariable} = require("./utils");

console.log(envVariable)

const app = express();
app.use(cors()).use(express.json());

  // api
// app.use("/api", api);

  // Catch 404 routes
app.all("*", (req, res, next) => {
    res.status(404).json({
    status: 404,
    message: `This route ${req.originalUrl} does not exist`
  })
})


(async () => {
  try {
   // await dbConfig();
    app.listen(envVariable.PORT, () => {
      console.log(`Server listening on ${envVariable.PORT}`);
    });
  } catch (error) {
    console.log(error.message);
  }
})();