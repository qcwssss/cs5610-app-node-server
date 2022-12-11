import mongoose from "mongoose";
const schema = mongoose.Schema(
  {
    title: String,
    location: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UsersModel",
    },
    date: String,
    content: String,
    image: String,
    likes: Number,
  },
  { collection: "posts" }
);
export default schema;
