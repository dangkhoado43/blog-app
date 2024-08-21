import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";
import moment from "moment";
import axios from "axios";
import { FaRegPenToSquare, FaRegTrashCan } from "react-icons/fa6";
import { AuthContext } from "../context/AuthContext";
import DefaultUserImage from "../assets/imgs/default_user.png";
import Menu from "../components/Menu";

const Single = () => {
    const [post, setPost] = useState({});

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

    return (
        <div className="single">
            <div className="content">
                {post.img && <img src={`../upload/${post.img}`} alt="post" />}
                <div className="user">
                    {post.userImg ? (
                        <img src={post.userImg} alt="user" />
                    ) : (
                        <img src={DefaultUserImage} alt="user" />
                    )}
                    <div className="info">
                        <span>{post.username}</span>
                        <p>Posted {moment(post.date).fromNow()}</p>
                    </div>
                    {currentUser.username === post.username && (
                        <div className="edit">
                            <Link to={`/write`} state={post}>
                                <FaRegPenToSquare className="update" />
                            </Link>

                            <FaRegTrashCan
                                className="delete"
                                onClick={handleDelete}
                            />
                        </div>
                    )}
                </div>
                <h1 className="title">{post.title}</h1>
                <p
                    className="main-content"
                    dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(post.desc),
                    }}
                ></p>
            </div>
            <Menu cat={post.cat} currentPostId={postId} />
        </div>
    );
};

export default Single;
