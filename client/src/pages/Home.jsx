import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const posts = [
        {
            id: 1,
            title: "Adipisicing consequat dolore adipisicing nulla enim officia est",
            desc: "Anim irure dolore et elit ut enim do ex voluptate.",
            img: "https://images.pexels.com/photos/1428347/pexels-photo-1428347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: 2,
            title: "Adipisicing consequat dolore adipisicing nulla enim officia est minim exercitation eu non amet.",
            desc: "Anim irure dolore et elit ut enim do ex voluptate.",
            img: "https://images.pexels.com/photos/179912/pexels-photo-179912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: 3,
            title: "Adipisicing consequat dolore adipisicing nulla enim officia est minim exercitation eu non amet.",
            desc: "Anim irure dolore et elit ut enim do ex voluptate.",
            img: "https://images.pexels.com/photos/604575/pexels-photo-604575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: 4,
            title: "Adipisicing consequat dolore adipisicing nulla enim officia est minim exercitation eu non amet.",
            desc: "Anim irure dolore et elit ut enim do ex voluptate.",
            img: "https://images.pexels.com/photos/2228563/pexels-photo-2228563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: 5,
            title: "Adipisicing consequat dolore adipisicing nulla enim officia est minim exercitation eu non amet.",
            desc: "Anim irure dolore et elit ut enim do ex voluptate.",
            img: "https://images.pexels.com/photos/3135356/pexels-photo-3135356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
    ];

    return (
        <div className="home">
            <div className="posts">
                {posts.map((post) => (
                    <div className="post" key={post.id}>
                        <div className="img">
                            <img src={post.img} alt="" />
                        </div>
                        <div className="content">
                            <Link to={`/post/${post.id}`} className="link">
                                <h1>{post.title}</h1>
                            </Link>
                            <p>{post.desc}</p>
                            <button>Read More</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
