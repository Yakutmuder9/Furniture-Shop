var createError = require("http-errors");
var express = require("express");
var path = require("path");
var logger = require("morgan");
const config = require('./config');
const cors = require("cors")
const passport = require('passport');

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const productRouter = require("./routes/productRouter");
const fileRoutes = require('./routes/file-upload-routes');
const stripe = require("stripe")("sk_test_51LM4lLLB8jsObGMGNQ0gIVDieVdgryk8jkfvTlvyV8uuLxknOUC4Q7Cguia6hq8OPbTIMly9hsgouWjH6PrwaRIL00PGHv812r");   
const {v4 : uuidv4} = require('uuid')
// const promotionRouter = require("./routes/promotionRouter");
// const partnerRouter = require("./routes/partnerRouter");
// const favoriteRouter = require("./routes/favoriteRouter");
const orderRouter = require("./routes/orderRouter");

const mongoose = require('mongoose');

const url = config.mongoUrl
const connect = mongoose.connect(url, {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

connect.then(() => console.log('Connected correctly to server'),
  err => console.log(err)
);


var app = express();
app.use(cors())
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser('12345-67890-09876-54321'));

app.use(passport.initialize());

app.use("/", indexRouter);
app.use("/users", usersRouter);

app.use(express.static(path.join(__dirname, "public")));

// app.use('/file', fileRoutes.routes);
app.use("/product", productRouter);


app.post("/checkout", async (req, res) => {
  console.log("Request:", req.body);

  let error;
  let status;
  try {
    const { product, token } = req.body;

    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id
    });

    const idempotency_key = uuidv4();
    const charge = await stripe.charges.create(
      {
        amount: product.price * 100,
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
        description: `Purchased the ${product.name}`,
        shipping: {
          name: token.card.name,
          address: {
            line1: token.card.address_line1,
            line2: token.card.address_line2,
            city: token.card.address_city,
            country: token.card.address_country,
            postal_code: token.card.address_zip
          }
        }
      },
      {
        idempotency_key
      }
    );
    console.log("Charge:", { charge });
    status = "success";
  } catch (error) {
    console.error("Error:", error);
    status = "failure";
  }

  res.json({ error, status });
});

app.use("/orders", orderRouter);


// app.use("/promotions", promotionRouter);
// app.use("/partners", partnerRouter);
// app.use("/favorite", favoriteRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
