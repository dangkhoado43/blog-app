import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import ReactQuill from "react-quill";
import axios from "axios";
import "react-quill/dist/quill.snow.css";

const Write = () => {
    const state = useLocation().state;

    const [desc, setDesc] = useState(state?.desc || "");
    const [title, setTitle] = useState(state?.title || "");
    const [file, setFile] = useState(null);
    const [cat, setCat] = useState(state?.cat || "");

    const navigate = useNavigate();

    const uploadImage = async () => {
        try {
            if (file !== null && file !== undefined) {
                const formData = new FormData();
                formData.append("file", file);
                const res = await axios.post("/upload", formData);
                return res.data;
            }
            return "";
        } catch (err) {
            console.error("Error uploading image:", err);
        }
    };

    const handleClick = async (e) => {
        e.preventDefault();
        const imgUrl = uploadImage();

        console.log(123);

        console.log(imgUrl);

        console.log(4);

        try {
            console.log("test");
            state
                ? await axios.put(`/posts/${state.id}`, {
                      title,
                      desc,
                      img: file ? imgUrl : "",
                      cat,
                      updatedAt: moment().format("YYYY-MM-DD HH:mm:ss"),
                  })
                : await axios.post("/posts/", {
                      title,
                      desc,
                      img: file ? imgUrl : "",
                      cat,
                      date: moment().format("YYYY-MM-DD HH:mm:ss"),
                      createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
                      updatedAt: moment().format("YYYY-MM-DD HH:mm:ss"),
                  });
            navigate("/");
        } catch (err) {
            console.error("Error posting blog:", err);
        }
    };

    return (
        <div className="add">
            <div className="content">
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <div className="editorContainer">
                    <ReactQuill
                        className="editor"
                        theme="snow"
                        value={desc}
                        onChange={setDesc}
                    />
                </div>
            </div>
            <div className="menu">
                <div className="item">
                    <h1>Publish</h1>
                    <span>
                        <b>Status: </b> Draft
                    </span>
                    <span>
                        <b>Visibility: </b> Public
                    </span>
                    <input
                        style={{ display: "none" }}
                        type="file"
                        id="file"
                        onChange={(e) => {
                            setFile(e.target.files[0]);
                        }}
                    />
                    <label className="file" htmlFor="file">
                        Upload Image
                    </label>
                    <div className="buttons">
                        <button>Save as a draft</button>
                        <button onClick={handleClick}>Publish</button>
                    </div>
                </div>
                <div className="item">
                    <h1>Category</h1>
                    <div className="cat">
                        <input
                            type="radio"
                            name="cat"
                            value="art"
                            id="art"
                            checked={cat === "art"}
                            onChange={(e) => setCat(e.target.value)}
                        />
                        <label htmlFor="art">Art</label>
                    </div>
                    <div className="cat">
                        <input
                            type="radio"
                            name="cat"
                            value="science"
                            id="science"
                            checked={cat === "science"}
                            onChange={(e) => setCat(e.target.value)}
                        />
                        <label htmlFor="science">Science</label>
                    </div>
                    <div className="cat">
                        <input
                            type="radio"
                            name="cat"
                            value="technology"
                            id="technology"
                            checked={cat === "technology"}
                            onChange={(e) => setCat(e.target.value)}
                        />
                        <label htmlFor="technology">Technology</label>
                    </div>
                    <div className="cat">
                        <input
                            type="radio"
                            name="cat"
                            value="cinema"
                            id="cinema"
                            checked={cat === "cinema"}
                            onChange={(e) => setCat(e.target.value)}
                        />
                        <label htmlFor="cinema">Cinema</label>
                    </div>
                    <div className="cat">
                        <input
                            type="radio"
                            name="cat"
                            value="design"
                            id="design"
                            checked={cat === "design"}
                            onChange={(e) => setCat(e.target.value)}
                        />
                        <label htmlFor="design">Design</label>
                    </div>
                    <div className="cat">
                        <input
                            type="radio"
                            name="cat"
                            value="food"
                            id="food"
                            checked={cat === "food"}
                            onChange={(e) => setCat(e.target.value)}
                        />
                        <label htmlFor="food">Food</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Write;
