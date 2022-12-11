import postsModel from "./post-model.js";

export const findPost = () =>
  postsModel.find().lean().populate("author", "username").exec();

export const findPostById = (pid) =>
  postsModel.findById({ _id: pid }).populate("author").exec();

export const findPostByLocation = (location) =>
  postsModel
    .find({ location: { $regex: location, $options: "i" } })
    .lean()
    .populate("author", "username")
    .exec();

export const findPostsByAuthor = (author) =>
  postsModel.find({ author }).lean().populate("author", "username").exec();

export const createPost = (post) => postsModel.create(post);

export const deletePost = (pid) => postsModel.deleteOne({ _id: pid });

export const updatePost = (pid, post) =>
  postsModel.updateOne({ _id: pid }, { $set: post });
