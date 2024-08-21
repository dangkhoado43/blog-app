// "use strict";

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import "dotenv/config";
import path from "path";
import cookieParser from "cookie-parser";
import route from "./routes/index.js";
import { FRONTEND_URL } from "./constants/URLConstant.js";

const app = express();
const port = process.env.PORT;

app.use(
    cors({
        origin: FRONTEND_URL,
    })
);

// app.use(cors());

// app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // axios, fetch, XMLHttpRequest...

app.use(cookieParser());

// override with POST having ?_method=DELETE/PUT/PATCH
// app.use(methodOverride("_method"));

// Use the routes
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
