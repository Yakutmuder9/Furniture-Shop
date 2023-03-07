import express from "express";

const checkoutRouter = express.Router();

/* GET checkoutRouter . */
checkoutRouter.get("/", function (req, res, next) {
  res.send("respond with a checkoutr resource");
});

export default checkoutRouter;