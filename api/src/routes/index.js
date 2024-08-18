import authRouter from "./auth.js";
import postRouter from "./posts.js";
import userRouter from "./users.js";

const route = (app) => {
    app.use("/api/auth", authRouter);
    app.use("/api/posts", postRouter);
    app.use("/api/users", userRouter);
};

export default route;
