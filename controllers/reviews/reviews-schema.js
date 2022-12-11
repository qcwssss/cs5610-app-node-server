import mongoose from "mongoose";

const reviewsSchema = mongoose.Schema(
  {
    review: String,
    postID: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UsersModel",
    },
    date: String,
  },
  { collection: "reviews" }
);
export default reviewsSchema;
