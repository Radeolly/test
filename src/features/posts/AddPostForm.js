import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "./postsSlice";

export const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const onSaveButtonPost = () => {
    if (title || content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content
        })
      );

      setTitle("");
      setContent("");
    }
  };

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  return (
    <section>
      <form>
        <input type="text" value={title} onChange={onTitleChanged} />
        <input type="text" value={content} onChange={onContentChanged} />
        <button type="button" onClick={onSaveButtonPost}>add post</button>
      </form>
    </section>
  );
};
