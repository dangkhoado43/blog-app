import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Menu({ cat, currentPostId }) {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await axios.get(`/posts`, {
                    params: { cat },
                });
                setPosts(res.data);
            } catch (err) {
                console.error("Error fetching posts:", err);
            }
        };
        fetchPosts();
    }, [cat, currentPostId]);

    const handleReadMore = (id) => {
        navigate(`/post/${id}`);
    };

    const filteredPosts = posts.filter((post) => post.id !== +currentPostId);

    return (
        <div className="menu">
            <h1>Other posts you may like</h1>
            {filteredPosts.map((post) => (
                <div className="post" key={post.id}>
                    <img src={`../upload/${post?.img}`} alt="post" />
                    <Link to={`/post/${post.id}`}>
                        <h2>{post.title}</h2>
                    </Link>
                    <button onClick={() => handleReadMore(post.id)}>
                        Read More
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Menu;
