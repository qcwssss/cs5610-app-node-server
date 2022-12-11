import mongoose from "mongoose";
import postsSchema from "./post-schema.js";

const postsModel = mongoose.model("PostModel", postsSchema);

export default postsModel;

