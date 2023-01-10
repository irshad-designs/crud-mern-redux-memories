import axios from "axios";

const url = "http://localhost:3001/posts";

export const postsData = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, currentPost) =>
  axios.patch(`${url}/${id}`, currentPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
