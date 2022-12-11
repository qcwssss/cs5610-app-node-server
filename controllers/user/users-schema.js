import mongoose from "mongoose";

const usersShcema = mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },
    email: { type: String, required: true },
    firstName: String,
    lastName: String,
    bio: String,
    iconImage: String,
    location: String,
    dateOfBirth: Date,
    dateJoined: Date,
    role: { type: String, enum: ["ADMIN", "USER"], select: false },
  },
  { collection: "users" }
);

export default usersShcema;
