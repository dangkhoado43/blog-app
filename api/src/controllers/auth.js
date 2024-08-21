import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { db } from "../config/db/db.js";

export const register = (req, res) => {
    const { email, username, password } = req.body;

    if (!email || !username || !password) {
        return res.status(400).json("Missing required fields");
    }

    // CHECK EXISTING USER
    const q = "SELECT * FROM users WHERE email = ? OR username = ?";

    db.query(q, [email, username], (err, result) => {
        if (err) return res.status(500).json("There is error in processing!");

        if (result.length) return res.status(409).json("User already exists!");

        // Encrypt password/ Hash password
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const q =
            "INSERT INTO users(`username`, `email`, `password`, `createdAt`, `updatedAt`) VALUES (?)";

        const values = [username, email, hash, new Date(), new Date()];

        db.query(q, [values], (err, result) => {
            if (err)
                return res.status(400).json("There is error in processing!");

            return res.status(200).json("User has been created!");
        });
    });
};

export const login = (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json("Missing required fields");
    }

    // CHECK USER
    const q = "SELECT * FROM users WHERE username = ?";

    db.query(q, [username], (err, result) => {
        if (err) return res.status(500).json("Error in processing!");
        if (result.length <= 0) return res.status(404).json("User not found!");

        // CHECK PASSWORD
        const { password, createdAt, updatedAt, ...other } = result[0];

        const isPasswordCorrect = bcrypt.compareSync(
            req.body.password,
            password
        );

        if (!isPasswordCorrect)
            return res.status(401).json("Incorrect username or password!");

        // Synchronous Sign with default (HMAC SHA256)
        const token = jwt.sign({ id: result[0].id }, process.env.PRIVATE_KEY);

        res.cookie(process.env.COOKIE_NAME, token, {
            httpOnly: true,
        })
            .status(200)
            .json(other);
        // httpOnly to true means that the cookie cannot be accessed via JavaScript in the browser.
        // a security feature that helps prevent cross-site scripting (XSS) attacks by ensuring that
        // the cookie is only sent to the server with HTTP requests
    });
};

export const logout = (req, res) => {
    res.clearCookie(process.env.COOKIE_NAME, {
        sameSite: "none",
        secure: true,
    })
        .status(200)
        .json("User has been logged out!");
};
