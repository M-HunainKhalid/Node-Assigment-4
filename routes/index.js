const express = require("express");

const router = express.Router();

const users = [];

router.get("/", (req, res, next) => {
  res.render("index", { pageTitle: "Add User" });
});

router.get("/users", (req, res, next) => {
  res.render("users", { pageTitle: "Users", users: users });
});

router.post("/add-user", (req, res, next) => {
  users.push({ name: req.body.username });
  res.redirect("/users");
});
module.exports = router;
