import * as reviewDao from "./reviews-dao.js";

const ReviewsController = (app) => {
  const createReview = async (req, res) => {
    const review = req.body;
    const currentUser = req.session["currentUser"];
    review.author = currentUser._id;
    const actualReview = await reviewDao.createReview(review);
    res.json(actualReview);
  };

  const findReviewsByPost = async (req, res) => {
    const postID = req.params.postID;
    const reviews = await reviewDao.findReviewsByPost(postID);
    res.json(reviews);
  };

  const findReviewsByAuthor = async (req, res) => {
    const author = req.params.author;
    const reviews = await reviewDao.findReviewsByAuthor(author);
    res.json(reviews);
  };

  app.post("/api/reviews", createReview);
  app.get("/api/posts/:postID/reviews", findReviewsByPost);
  app.get("/api/users/:author/reviews", findReviewsByAuthor);
};
export default ReviewsController;
