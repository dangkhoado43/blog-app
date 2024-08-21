import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";
import moment from "moment";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import Edit from "../assets/imgs/edit.png";
import Delete from "../assets/imgs/delete.png";
import Menu from "../components/Menu";

const Single = () => {
    const [post, setPost] = useState({});

    console.log(post);

    const location = useLocation();
    const navigate = useNavigate();

    const postId = location.pathname.split("/")[2];

    if (!postId) {
        navigate("/");
    }

    const { currentUser } = useContext(AuthContext);

    const handleDelete = async () => {
        try {
            await axios.delete(`/posts/${postId}`);
            navigate("/");
        } catch (err) {
            console.error("Error when deleting post:", err);
        }
    };

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await axios.get(`/posts/${postId}`);
                setPost(res.data);
            } catch (err) {
                console.error("Error:", err);
            }
        };
        fetchPost();
    }, [postId]);

    const getText = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        return doc.body.textContent;
    };

    return (
        <div className="single">
            <div className="content">
                <img src={`../upload/${post?.img}`} alt="post" />
                <div className="user">
                    {/* {post.userImg && <img src={post.userImg} alt="user" />} */}
                    <div className="info">
                        <span>{post.username}</span>
                        <p>Posted {moment(post.date).fromNow()}</p>
                    </div>
                    {currentUser.username === post.username && (
                        <div className="edit">
                            <Link to={`/write`} state={post}>
                                <img src={Edit} alt="update" />
                            </Link>
                            <img
                                onClick={handleDelete}
                                src={Delete}
                                alt="delete"
                            />
                        </div>
                    )}
                </div>
                <h1>{post.title}</h1>
                <p
                    dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(post.desc),
                    }}
                ></p>
            </div>
            <Menu cat={post.cat} />
        </div>
    );
};

export default Single;
