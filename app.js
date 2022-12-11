import express, { application } from "express";
import cors from "cors";
import PostsController from "./controllers/post/post-controller.js";
import UsersController from "./controllers/user/users-controller.js";
import ReviewsController from "./controllers/reviews/reviews-controller.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import session from "express-session";

dotenv.config("./env");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  autoIndex: false,
  maxPoolSize: 10,
  socketTimeoutMS: 45000,
  family: 4,
};

const CONNECTION_STRING =
  process.env.DB_CONNECTION_STRING || "mongodb://localhost:27017/Travello";
mongoose.connect(CONNECTION_STRING, options);

const app = express();
app.use(
  cors({
    credentials: true,
    origin: "https://travello-app-0573e0.netlify.app",
  })
);
app.set("trust proxy", 1);
app.use(
  session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
app.use(express.json());

UsersController(app);
PostsController(app);
ReviewsController(app);

app.listen(process.env.PORT || 4000);
