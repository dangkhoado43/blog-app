import React from "react";

function Menu() {
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
        <div className="menu">
            <h1>Other posts you may like</h1>
            {posts.map((post) => (
                <div className="post" key={post.id}>
                    <img src={post.img} alt="" />
                    <h2>{post.title}</h2>
                    <button>Read More</button>
                </div>
            ))}
        </div>
    );
}

export default Menu;
