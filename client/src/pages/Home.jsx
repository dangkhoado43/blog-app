import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    const cat = useLocation().search;

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await axios.get(`/posts${cat}`);
                setPosts(res.data);
            } catch (err) {
                console.error("Error fetching posts:", err);
            }
        };
        fetchPosts();
    }, [cat]);

    const getText = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        return doc.body.textContent;
    };

    const truncateText = (text, maxWords) => {
        const words = text.split(" ");
        if (words.length <= maxWords) {
            return text;
        }
        return words.slice(0, maxWords).join(" ") + "...";
    };

    // const posts = [
    //     {
    //         id: 1,
    //         title: "Adipisicing consequat dolore adipisicing nulla enim officia est",
    //         desc: "Anim irure dolore et elit ut enim do ex voluptate.",
    //         img: "https://images.pexels.com/photos/1428347/pexels-photo-1428347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //     },
    //     {
    //         id: 2,
    //         title: "Adipisicing consequat dolore adipisicing nulla enim officia est minim exercitation eu non amet.",
    //         desc: "Anim irure dolore et elit ut enim do ex voluptate.",
    //         img: "https://images.pexels.com/photos/179912/pexels-photo-179912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //     },
    //     {
    //         id: 3,
    //         title: "Adipisicing consequat dolore adipisicing nulla enim officia est minim exercitation eu non amet.",
    //         desc: "Anim irure dolore et elit ut enim do ex voluptate.",
    //         img: "https://images.pexels.com/photos/604575/pexels-photo-604575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //     },
    //     {
    //         id: 4,
    //         title: "Adipisicing consequat dolore adipisicing nulla enim officia est minim exercitation eu non amet.",
    //         desc: "Anim irure dolore et elit ut enim do ex voluptate.",
    //         img: "https://images.pexels.com/photos/2228563/pexels-photo-2228563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //     },
    //     {
    //         id: 5,
    //         title: "Adipisicing consequat dolore adipisicing nulla enim officia est minim exercitation eu non amet.",
    //         desc: "Anim irure dolore et elit ut enim do ex voluptate.",
    //         img: "https://images.pexels.com/photos/3135356/pexels-photo-3135356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //     },
    // ];

    const handleReadMore = async (id) => {
        navigate(`/post/${id}`);
    };

    return (
        <div className="home">
            <div className="posts">
                {posts.map((post) => (
                    <div className="post" key={post.id}>
                        <div className="img">
                            <img src={`../upload/${post.img}`} alt="post" />
                        </div>
                        <div className="content">
                            <Link to={`/post/${post.id}`} className="link">
                                <h1>{truncateText(post.title, 50)}</h1>
                            </Link>
                            <p>{truncateText(getText(post.desc), 100)}</p>
                            <button onClick={() => handleReadMore(post.id)}>
                                Read More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
