import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Menu({ cat }) {
    const [posts, setPosts] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/posts/?cat=${cat}`);
                setPosts(res.data);
            } catch (err) {
                console.error("Error:", err);
            }
        };
        fetchData();
    }, [cat]);

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

    const handleReadMore = (e, id) => {
        e.preventDefault();
        navigate(`/post/${id}`);
    };

    return (
        <div className="menu">
            <h1>Other posts you may like</h1>
            {posts.map((post) => (
                <div className="post" key={post.id}>
                    <img src={`../upload/${post?.img}`} alt="post" />
                    <h2>{post.title}</h2>
                    <button
                        onClick={(e) => {
                            handleReadMore(e, post.id);
                        }}
                    >
                        Read More
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Menu;
