import postMessage from "../models/postModel.js";

export const getContents = async (req, res) => {
  try {
    const posts = await postMessage.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json(error);
  }
};

export const postContents = async (req, res) => {
  const post = req.body;
  try {
    const newPost = new postMessage(post);
    await newPost.save();
    res.status(202).json("added succesfully...");
  } catch (error) {
    res.status(409).json("cannot add right now");
  }
};

export const updateContents = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const post = req.body;
  try {
    const updatedPost = await postMessage.findByIdAndUpdate(id, post, {
      new: true,
    });
    res.status(202).json(updatedPost);
  } catch (error) {
    res.status(409).json(error.message);
  }
};

export const deleteContents = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const deletePost = await postMessage.findByIdAndDelete(id);
    res.status(202).json("deleted successfully");
  } catch (error) {
    res.status(409).json(error.message);
  }
};
