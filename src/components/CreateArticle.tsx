"use client";
import React, { useState } from "react";

function CreateArticle() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCreateArticle = () => {
    fetch("http://localhost:3001/articles", {
        method: "POST",
        body:JSON.stringify( {
            id: Math.floor(Math.random() * 1000).toString(),
            title: title,
            description: description
          })
    })
  };

  return (
    <div className="bg-slate-300 flex flex-col px-96">
      <label>Title</label>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="bg-white"
        type="text"
      />

      <label>Description</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="bg-white"
      ></textarea>

      <button onClick={handleCreateArticle} className="bg-green-400 cursor-pointer mt-5">Submit</button>
    </div>
  );
}

export default CreateArticle;
