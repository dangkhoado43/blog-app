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

        console.log(result[0]);

        return res.status(200).json(result[0]);
    });
};

export const addPost = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not authenticated!");

    jwt.verify(token, process.env.PRIVATE_KEY, (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");
        console.log("test 2");

        const { title, desc, img, date, cat } = req.body;

        console.log("test 3");

        if (!title || !desc || !date) {
            return res.status(400).json("Missing required fields!");
        }

        console.log("test 4");

        const q =
            "INSERT INTO posts(`title`, `desc`, `img`, `cat`, `date`, `uid`, `createdAt`, `updatedAt`) VALUES (?)";

        console.log("test 5");
        const values = [
            title,
            desc,
            img,
            cat,
            date,
            userInfo.id,
            new Date(),
            new Date(),
        ];

        console.log("test 8");
        console.log(values);

        db.query(q, [values], (err, result) => {
            console.log("test 9");
            console.log([values]);
            if (err) {
                console.log(err);
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

        const { title, desc, img, cat } = req.body;

        if (!title || !desc) {
            return res.status(400).json("Missing required fields!");
        }

        const q =
            "UPDATE posts SET `title` = ?, `desc` = ?, `img` = ?, `cat` = ?, `updatedAt` = ? WHERE `id` = ? AND `uid` = ?";

        const values = [title, desc, img, cat, new Date()];

        db.query(q, [...values, postId, userInfo.id], (err, result) => {
            if (err)
                return res.status(500).json("There is error in processing!");

            return res.json("Post has been updated.");
        });
    });
};
