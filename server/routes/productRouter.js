const express = require('express');
const Product = require('../modal/product');
const authenticate = require('../authenticate');
const cors = require('./cors');
const productRouter = express.Router();

productRouter.route('/')
    .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
    .get((req, res, next) => {
        Product.find()
            // .populate('comments.author')
            .then(products => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(products);
            })
            .catch(err => next(err));
    })
    .post( (req, res, next) => {
        Product.create(req.body)
            .then(product => {
                console.log('product Created ', product);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(product);
            })
            .catch(err => next(err));
    })
    .put(cors.corsWithOptions, authenticate.verifyUser, (req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /products');
    })
    .delete(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
        Product.deleteMany()
            .then(response => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(response);
            })
            .catch(err => next(err));
    });

productRouter.route('/:productId')
    .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
    .get((req, res, next) => {
        Product.findById(req.params.productId)
            .populate('comments.author')
            .then(product => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(product);
            })
            .catch(err => next(err));
    })
    .post(cors.corsWithOptions,authenticate.verifyUser, (req, res) => {
        res.statusCode = 403;
        res.end(`POST operation not supported on /products/${req.params.productId}`);
    })
    .put(cors.corsWithOptions,authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
        product.findByIdAndUpdate(req.params.productId, {
            $set: req.body
        }, { new: true })
            .then(product => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(product);
            })
            .catch(err => next(err));
    })
    .delete(cors.corsWithOptions,authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
        product.findByIdAndDelete(req.params.productId)
            .then(response => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(response);
            })
            .catch(err => next(err));
    });

productRouter.route('/:productId/comments')
    .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
    .get((req, res, next) => {
        Product.findById(req.params.productId)
            .populate('comments.author')
            .then(product => {
                if (product) {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(product.comments);
                } else {
                    err = new Error(`product ${req.params.productId} not found`);
                    err.status = 404;
                    return next(err);
                }
            })
            .catch(err => next(err));
    })
    .post(cors.corsWithOptions,authenticate.verifyUser, (req, res, next) => {
        Product.findById(req.params.productId)
            .then(product => {
                if (product) {
                    req.body.author = req.user._id;
                    product.comments.push(req.body);
                    product.save()
                        .then(product => {
                            res.statusCode = 200;
                            res.setHeader('Content-Type', 'application/json');
                            res.json(product);
                        })
                        .catch(err => next(err));
                } else {
                    err = new Error(`product ${req.params.productId} not found`);
                    err.status = 404;
                    return next(err);
                }
            })
            .catch(err => next(err));
    })
    .put(cors.corsWithOptions,authenticate.verifyUser, (req, res) => {
        res.statusCode = 403;
        res.end(`PUT operation not supported on /products/${req.params.productId}/comments`);
    })
    .delete(cors.corsWithOptions,authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
        Product.findById(req.params.productId)
            .then(product => {
                if (product) {
                    for (let i = (product.comments.length - 1); i >= 0; i--) {
                        product.comments.id(product.comments[i]._id).remove();
                    }
                    product.save()
                        .then(product => {
                            res.statusCode = 200;
                            res.setHeader('Content-Type', 'application/json');
                            res.json(product);
                        })
                        .catch(err => next(err));
                } else {
                    err = new Error(`product ${req.params.productId} not found`);
                    err.status = 404;
                    return next(err);
                }
            })
            .catch(err => next(err));
    });

productRouter.route('/:productId/comments/:commentId')
    .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
    .get((req, res, next) => {
        Product.findById(req.params.productId)
            .populate('comments.author')
            .then(product => {
                if (product && product.comments.id(req.params.commentId)) {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
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
            .catch(err => next(err));
    })
    .post(cors.corsWithOptions,authenticate.verifyUser, (req, res) => {
        res.statusCode = 403;
        res.end(`POST operation not supported on /products/${req.params.productId}/comments/${req.params.commentId}`);
    })
    .put(cors.corsWithOptions,authenticate.verifyUser, (req, res, next) => {
        Product.findById(req.params.productId)
            .then(product => {
                if (product && product.comments.id(req.params.commentId)) {
                    if ((product.comment.id(req.params.commentId).author._id).equals(req.user._id)) {
                        if (req.body.rating) {
                            product.comments.id(req.params.commentId).rating = req.body.rating;
                        }
                        if (req.body.text) {
                            product.comments.id(req.params.commentId).text = req.body.text;
                        }
                        product.save()
                            .then(product => {
                                res.statusCode = 200;
                                res.setHeader('Content-Type', 'application/json');
                                res.json(product);
                            })
                            .catch(err => next(err));
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
            .catch(err => next(err));
    })
    .delete(cors.corsWithOptions,authenticate.verifyUser, (req, res, next) => {
        Product.findById(req.params.productId)
            .then(product => {
                if (product && product.comments.id(req.params.commentId)) {
                    if ((product.comment.id(req.params.commentId).author._id).equals(req.user._id)) {
                        product.comments.id(req.params.commentId).remove();
                        product.save()
                            .then(product => {
                                res.statusCode = 200;
                                res.setHeader('Content-Type', 'application/json');
                                res.json(product);
                            })
                            .catch(err => next(err));
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
            .catch(err => next(err));
    });


module.exports = productRouter;