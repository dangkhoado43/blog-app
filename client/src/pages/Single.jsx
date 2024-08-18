import React from "react";
import { Link } from "react-router-dom";
import Edit from "../assets/imgs/edit.png";
import Delete from "../assets/imgs/delete.png";
import Menu from "../components/Menu";

const Single = () => {
    return (
        <div className="single">
            <div className="content">
                <img
                    src="https://images.pexels.com/photos/3135356/pexels-photo-3135356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                />
                <div className="user">
                    <img
                        src="https://media.istockphoto.com/id/1364917563/vi/anh/doanh-nh%C3%A2n-m%E1%BB%89m-c%C6%B0%E1%BB%9Di-v%E1%BB%9Bi-c%C3%A1nh-tay-khoanh-l%E1%BA%A1i-tr%C3%AAn-n%E1%BB%81n-tr%E1%BA%AFng.jpg?s=1024x1024&w=is&k=20&c=ldkLDyGrvDusqqr3qW_LjXbxIwBlYXV18tOZF5fi-Bs="
                        alt=""
                    />
                    <div className="info">
                        <span>John</span>
                        <p>Posted 2 days ago</p>
                    </div>
                    <div className="edit">
                        <Link to={`/write?edit=2`}>
                            <img src={Edit} alt="" />
                        </Link>
                        <img src={Delete} alt="" />
                    </div>
                </div>
                <h1>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, voluptatibus voluptates quae expedita, cumque
                    deleniti nesciunt veniam rem nisi debitis, tempore magnam
                    aperiam facere autem doloribus?
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, voluptatibus voluptates quae expedita, cumque
                    deleniti nesciunt veniam rem nisi debitis, tempore magnam
                    aperiam facere autem doloribus? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quisquam, voluptatibus
                    voluptates quae expedita, cumque deleniti nesciunt veniam
                    rem nisi debitis, tempore magnam aperiam facere autem
                    doloribus? Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quisquam, voluptatibus voluptates quae
                    expedita, cumque deleniti nesciunt veniam rem nisi debitis,
                    tempore magnam aperiam facere autem doloribus?
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, voluptatibus voluptates quae expedita, cumque
                    deleniti nesciunt veniam rem nisi debitis, tempore magnam
                    aperiam facere autem doloribus? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quisquam, voluptatibus
                    voluptates quae expedita, cumque deleniti nesciunt veniam
                    rem nisi debitis, tempore magnam aperiam facere autem
                    doloribus? Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quisquam, voluptatibus voluptates quae
                    expedita, cumque deleniti nesciunt veniam rem nisi debitis,
                    tempore magnam aperiam facere autem doloribus?
                </p>
            </div>
            <Menu />
        </div>
    );
};

export default Single;
