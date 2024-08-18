// "use strict";

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import "dotenv/config";
import path from "path";
import route from "./routes/index.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

// app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // axios, fetch, XMLHttpRequest...

// override with POST having ?_method=DELETE/PUT/PATCH
// app.use(methodOverride("_method"));

// Use the routes
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
