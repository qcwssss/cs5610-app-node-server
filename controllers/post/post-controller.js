import * as postDao from "../post/post-dao.js";

const createPost = async (req, res) => {
  const newPost = req.body;
  newPost.likes = 0;
  const currentUser = req.session["currentUser"];
  newPost.author = currentUser._id;
  const insertedPost = await postDao.createPost(newPost);
  res.json(insertedPost);
};
const findPost = async (req, res) => {
  const posts = await postDao.findPost();
  res.json(posts);
};
const findPostById = async (req, res) => {
  const postId = req.params.pid;
  const post = await postDao.findPostById(postId);
  res.json(post);
};

const findPostsByAuthor = async (req, res) => {
  const author = req.params.author;
  try {
    const posts = await postDao.findPostsByAuthor(author);
    res.json(posts);
  } catch (e) {
    console.log(e.message);
  }
};

const findPostsByLocation = async (req, res) => {
  try {
    const location = req.params.location;
    const posts = await postDao.findPostByLocation(location);
    res.json(posts);
  } catch (e) {
    console.log(e.message);
  }
};

const updatePost = async (req, res) => {
  const postIdToUpdate = req.params.pid;
  const updates = req.body;
  const status = await postDao.updatePost(postIdToUpdate, updates);
  res.json(status);
};

const deletePost = async (req, res) => {
  const postIdToDelete = req.params.pid;
  const status = await postDao.deletePost(postIdToDelete);
  res.json(status);
};

export default (app) => {
  app.post("/api/posts", createPost);
  app.get("/api/posts", findPost);
  app.get("/api/posts/:pid", findPostById);
  app.get("/api/:author/posts", findPostsByAuthor);
  app.get("/api/posts/location/:location", findPostsByLocation);
  app.put("/api/posts/:pid", updatePost);
  app.delete("/api/posts/:pid", deletePost);
};
