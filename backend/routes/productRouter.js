import { Router } from "express";
import Product from "../models/product.js";
import multer from "multer";
import SingleFile from "../models/singlefile.js";

const productRouter = Router();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../client/public/images");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(file.originalname);
  },
});

const uploadStorage = multer({ storage: storage });

productRouter
  .route("/")
  .options((req, res) => res.sendStatus(200))
  .get((req, res, next) => {
    Product.find()
      // .populate('comments.author')
      .then((products) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(products);
      })
      .catch((err) => next(err), console.log("requrired"));
  })
  .post((req, res, next) => {
    Product.create(req.body)
      .then((product) => {
        console.log("product Created ", product);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(product);
      })
      .catch((err) => next(err));
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /products");
  })
  .delete((req, res, next) => {
    Product.deleteMany()
      .then((response) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(response);
      })
      .catch((err) => next(err));
  });

productRouter
  .route("/:productId")
  .options((req, res) => res.sendStatus(200))
  .get((req, res, next) => {
    Product.findById(req.params.productId)
      // .populate('comments.author')
      .then((product) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(product);
      })
      .catch((err) => next(err));
  })
  .post((req, res) => {
    res.statusCode = 403;
    res.end(
      `POST operation not supported on /products/${req.params.productId}`
    );
  })
  .put((req, res, next) => {
    product
      .findByIdAndUpdate(
        req.params.productId,
        {
          $set: req.body,
        },
        { new: true }
      )
      .then((product) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(product);
      })
      .catch((err) => next(err));
  })
  .delete((req, res, next) => {
    Product
      .findByIdAndDelete(req.params.productId)
      .then((response) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(response);
      })
      .catch((err) => next(err));
  });

productRouter
  .route("/:productId/comments")
  .options((req, res) => res.sendStatus(200))
  .get((req, res, next) => {
    Product.findById(req.params.productId)
      // .populate('comments.author')
      .then((product) => {
        if (product) {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(product.comments);
        } else {
          err = new Error(`product ${req.params.productId} not found`);
          err.status = 404;
          return next(err);
        }
      })
      .catch((err) => next(err));
  })
  .post((req, res, next) => {
    Product.findById(req.params.productId)
      .then((product) => {
        if (product) {
          req.body.author = req.user._id;
          product.comments.push(req.body);
          product
            .save()
            .then((product) => {
              res.statusCode = 200;
              res.setHeader("Content-Type", "application/json");
              res.json(product);
            })
            .catch((err) => next(err));
        } else {
          err = new Error(`product ${req.params.productId} not found`);
          err.status = 404;
          return next(err);
        }
      })
      .catch((err) => next(err));
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end(
      `PUT operation not supported on /products/${req.params.productId}/comments`
    );
  })
  .delete((req, res, next) => {
    Product.findById(req.params.productId)
      .then((product) => {
        if (product) {
          for (let i = product.comments.length - 1; i >= 0; i--) {
            product.comments.id(product.comments[i]._id).remove();
          }
          product
            .save()
            .then((product) => {
              res.statusCode = 200;
              res.setHeader("Content-Type", "application/json");
              res.json(product);
            })
            .catch((err) => next(err));
        } else {
          err = new Error(`product ${req.params.productId} not found`);
          err.status = 404;
          return next(err);
        }
      })
      .catch((err) => next(err));
  });

productRouter
  .route("/:productId/comments/:commentId")
  .options((req, res) => res.sendStatus(200))
  .get((req, res, next) => {
    Product.findById(req.params.productId)
      .populate("comments.author")
      .then((product) => {
        if (product && product.comments.id(req.params.commentId)) {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(product.comments.id(req.params.commentId));
        } else if (!product) {
          err = new Error(`product ${req.params.productId} not found`);
          err.status = 404;
          return next(err);
        } else {
          err = new Error(`Comment ${req.params.commentId} not found`);
          err.status = 404;
          return next(err);
        }
      })
      .catch((err) => next(err));
  })
  .post((req, res) => {
    res.statusCode = 403;
    res.end(
      `POST operation not supported on /products/${req.params.productId}/comments/${req.params.commentId}`
    );
  })
  .put((req, res, next) => {
    Product.findById(req.params.productId)
      .then((product) => {
        if (product && product.comments.id(req.params.commentId)) {
          if (
            product.comment
              .id(req.params.commentId)
              .author._id.equals(req.user._id)
          ) {
            if (req.body.rating) {
              product.comments.id(req.params.commentId).rating =
                req.body.rating;
            }
            if (req.body.text) {
              product.comments.id(req.params.commentId).text = req.body.text;
            }
            product
              .save()
              .then((product) => {
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.json(product);
              })
              .catch((err) => next(err));
          } else {
            err = new Error(`You are not authorized to update comment!`);
            err.status = 404;
            return next(err);
          }
        } else if (!product) {
          err = new Error(`product ${req.params.productId} not found`);
          err.status = 404;
          return next(err);
        } else {
          err = new Error(`Comment ${req.params.commentId} not found`);
          err.status = 404;
          return next(err);
        }
      })
      .catch((err) => next(err));
  })
  .delete((req, res, next) => {
    Product.findById(req.params.productId)
      .then((product) => {
        if (product && product.comments.id(req.params.commentId)) {
          if (
            product.comment
              .id(req.params.commentId)
              .author._id.equals(req.user._id)
          ) {
            product.comments.id(req.params.commentId).remove();
            product
              .save()
              .then((product) => {
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.json(product);
              })
              .catch((err) => next(err));
          } else {
            err = new Error(`You are not authoirzed!`);
            err.status = 404;
            return next(err);
          }
        } else if (!product) {
          err = new Error(`product ${req.params.productId} not found`);
          err.status = 404;
          return next(err);
        } else {
          err = new Error(`Comment ${req.params.commentId} not found`);
          err.status = 404;
          return next(err);
        }
      })
      .catch((err) => next(err));
  });

productRouter
  .route("/:productId/images")
  .options((req, res) => res.sendStatus(200))
  .get(async (req, res, next) => {
    try {
      const files = await SingleFile.find();
      res.status(200).send(files);
    } catch (error) {
      res.status(400).send(error.message);
    }
  })
  .post(uploadStorage.single("image"), (req, res, next) => {
    Product.findById(req.params.productId)
      .then((product) => {
        if (req.file === undefined) {
          return res.send("you must select a file.");
        } else if (product) {
          const imgUrl = `http://localhost:5000/products/${req.params.productId}/images/${req.file.filename}`;
          product.images.push(req.body);
          product
            .save()
            .then((product) => {
              res.statusCode = 200;
              res.setHeader("Content-Type", "application/json");
              res.json(product);
            })
            .catch((err) => next(err));
          return res.send(imgUrl);
        } else {
          err = new Error(`product ${req.params.productId} not found`);
          err.status = 404;
          return next(err);
        }
      })
      .catch((err) => next(err));
  });

productRouter
  .route("/:productId/images/:imageId")
  .options((req, res) => res.sendStatus(200))
  .get(async (req, res, next) => {
    Product.findById(req.params.productId)
      .then((product) => {
        if (product && product.images.id(req.params.imageId)) {
          const file = new SingleFile({
            fileName: req.file.originalname,
            filePath: req.file.path,
            fileType: req.file.mimetype,
            fileSize: fileSizeFormatter(req.file.size, 2), // 0.00
          });
          file.save();
          res.status(201).send("File Uploaded Successfully");
        } else if (!product) {
          err = new Error(`product ${req.params.productId} not found`);
          err.status = 404;
          return next(err);
        } else {
          err = new Error(`Image ${req.params.imageId} not found`);
          err.status = 404;
          return next(err);
        }
      })
      .catch((err) => next(err));
  })
  .post((req, res) => {
    res.statusCode = 403;
    res.end(
      `POST operation not supported on /products/${req.params.productId}/images/${req.params.imageId}`
    );
  })
  .put((req, res, next) => {
    Product.findById(req.params.productId)
      .then((product) => {
        if (product && product.images.id(req.params.imageId)) {
          if (
            product.comment
              .id(req.params.imageId)
              .author._id.equals(req.user._id)
          ) {
            if (req.body.rating) {
              product.images.id(req.params.imageId).rating = req.body.rating;
            }
            if (req.body.text) {
              product.images.id(req.params.imageId).text = req.body.text;
            }
            product
              .save()
              .then((product) => {
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.json(product);
              })
              .catch((err) => next(err));
          } else {
            err = new Error(`You are not authorized to update comment!`);
            err.status = 404;
            return next(err);
          }
        } else if (!product) {
          err = new Error(`product ${req.params.productId} not found`);
          err.status = 404;
          return next(err);
        } else {
          err = new Error(`Comment ${req.params.imageId} not found`);
          err.status = 404;
          return next(err);
        }
      })
      .catch((err) => next(err));
  })
  .delete((req, res, next) => {
    Product.findById(req.params.productId)
      .then((product) => {
        if (product && product.images.id(req.params.imageId)) {
          if (
            product.comment
              .id(req.params.imageId)
              .author._id.equals(req.user._id)
          ) {
            product.images.id(req.params.imageId).remove();
            product
              .save()
              .then((product) => {
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.json(product);
              })
              .catch((err) => next(err));
          } else {
            err = new Error(`You are not authoirzed!`);
            err.status = 404;
            return next(err);
          }
        } else if (!product) {
          err = new Error(`product ${req.params.productId} not found`);
          err.status = 404;
          return next(err);
        } else {
          err = new Error(`Comment ${req.params.imageId} not found`);
          err.status = 404;
          return next(err);
        }
      })
      .catch((err) => next(err));
  });

export default productRouter;
