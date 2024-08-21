import jwt from "jsonwebtoken";
import "dotenv/config";
import { db } from "../config/db/db.js";

export const getAllPosts = (req, res) => {
    const { cat } = req.query;

    const q = cat ? "SELECT * FROM posts WHERE cat = ?" : "SELECT * FROM posts";

    db.query(q, [cat], (err, result) => {
        if (err) return res.status(500).json("There is error in processing!");

        return res.status(200).json(result);
    });
};

export const getPost = (req, res) => {
    const q =
        "SELECT p.id, `username`, `title`, `desc`, p.img, u.img AS userImg, `cat`,`date` FROM users u JOIN posts p ON u.id = p.uid WHERE p.id = ? ";

    db.query(q, [req.params.id], (err, result) => {
        if (err) return res.status(500).json("There is error in processing!");

        return res.status(200).json(result[0]);
    });
};

export const addPost = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not authenticated!");

    jwt.verify(token, process.env.PRIVATE_KEY, (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");

        const { title, desc, img, date, cat, createdAt, updatedAt } = req.body;

        if (!title || !desc || !date) {
            return res.status(400).json("Missing required fields!");
        }

        const q =
            "INSERT INTO posts(`title`, `desc`, `img`, `cat`, `date`, `uid`, `createdAt`, `updatedAt`) VALUES (?)";

        const values = [
            title,
            desc,
            img,
            cat,
            date,
            userInfo.id,
            createdAt,
            updatedAt,
        ];

        db.query(q, [values], (err, result) => {
            if (err) {
                return res.status(400).json("There is error in processing!");
            }

            return res.status(200).json("Post has been created!");
        });
    });
};

export const deletePost = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not authenticated!");

    jwt.verify(token, process.env.PRIVATE_KEY, (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");

        const postId = req.params.id;
        if (!postId) {
            return res.status(400).json("Request ID is invalid!");
        }
        const q = "DELETE FROM posts WHERE `id` = ? AND `uid` = ?";

        db.query(q, [postId, userInfo.id], (err, result) => {
            if (err)
                return res.status(403).json("You can delete only your post!");

            return res.json("Post has been deleted!");
        });
    });
};

export const updatePost = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not authenticated!");

    jwt.verify(token, process.env.PRIVATE_KEY, (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");

        const postId = req.params.id;
        if (!postId) {
            return res.status(400).json("Request ID is invalid!");
        }

        const { title, desc, img, cat, updatedAt } = req.body;

        if (!title || !desc) {
            return res.status(400).json("Missing required fields!");
        }

        const q =
            "UPDATE posts SET `title` = ?, `desc` = ?, `img` = ?, `cat` = ?, `updatedAt` = ? WHERE `id` = ? AND `uid` = ?";

        const values = [title, desc, img, cat, updatedAt];

        db.query(q, [...values, postId, userInfo.id], (err, result) => {
            if (err)
                return res.status(500).json("There is error in processing!");

            return res.json("Post has been updated.");
        });
    });
};
