import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { removePost } from "./postsSlice";

export const PostsList = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const removePostFromList = (id) => {
    dispatch(removePost(id));
    console.log("ssss");
  };

  const renderedPosts = posts.map((post) => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <p className="post-content">{post.content.substring(0, 100)} </p>
      <button onClick={() => removePostFromList(post.id)}></button>
    </article>
  ));

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};
