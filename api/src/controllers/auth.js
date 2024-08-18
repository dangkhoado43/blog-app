import bcrypt from "bcryptjs";
import { db } from "../config/db/db.js";

export const register = (req, res) => {
    const { email, username, password } = req.body;

    if (!email || !username || !password) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    // CHECK EXISTING USER
    const q = "SELECT * FROM users WHERE email = ? OR username = ?";

    db.query(q, [email, username], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });

        if (result.length) return res.status(409).json("User already exists!");

        // Encrypt password/ Hash password
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const q =
            "INSERT INTO users(`username`, `email`, `password`, `createdAt`, `updatedAt`) VALUES (?)";

        const values = [username, email, hash, new Date(), new Date()];

        db.query(q, [values], (err, result) => {
            if (err) return res.status(400).json(err);

            return res.status(200).json("User has been created!");
        });
    });
};

export const login = (req, res) => {
    res.json({ test: "Login" });
};

export const logout = (req, res) => {
    res.json({ test: "Log out" });
};
