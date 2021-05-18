var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
  res.render("index", {
    title: "Home"
  });
});

router.get("/about", function(req, res) {
  res.render("about", {
    title: "About"
  });
});

router.get("/contact", function(req, res) {
  res.render("contact", {
    title: "Contact"
  });
});

router.get("/work", function(req, res) {
  res.render("work", {
    title: "Work"
  });
});

router.get("/crystal", function(req, res) {
  res.render("crystal", {
    title: "Crystal Knows Case"
  });
});

router.get("/freelance", function(req, res) {
  res.render("freelance", {
    title: "Freelance Case"
  });
});

router.get("/mobile-app", function(req, res) {
  res.render("mobile-app", {
    title: "Mobile App Case"
  });
});

router.get("/alpaca", function(req, res) {
  res.render("alpaca", {
    title: "Alpaca | You're Welcome"
  });
});

router.get("/error", function(req, res) {
  res.render("error", {
    title: "Error"
  });
});

module.exports = router;
