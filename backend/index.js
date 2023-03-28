// import express
import express from "express";

// import cors
import cors from "cors";

// import routes
import Router from "./router/routes.js";

// init express
const app = express();

// use express json
app.use(express.json());

// use cors
app.use(cors());

// use router
app.use(Router);

// PORT
app.listen(5000, () => {
  console.log("server is running at port: 5000");
})