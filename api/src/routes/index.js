import multer from "multer";
import authRouter from "./auth.js";
import postRouter from "./posts.js";
import userRouter from "./users.js";

const route = (app) => {
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "../client/public/upload");
        },
        filename: function (req, file, cb) {
            cb(null, Date.now() + file.originalname);
        },
    });

    const upload = multer({ storage });

    app.post("/api/upload", upload.single("file"), (req, res) => {
        const file = req.file;
        res.status(200).json(file.filename);
    });

    app.use("/api/auth", authRouter);
    app.use("/api/posts", postRouter);
    app.use("/api/users", userRouter);
};

export default route;
