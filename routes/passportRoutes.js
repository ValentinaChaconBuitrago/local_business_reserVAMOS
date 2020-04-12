const express = require("express");
const passport = require("passport");

const router = express.Router();
const MongoUtils = require("../db/MongoUtils.js");

const mu = MongoUtils();

router.post("/addStore", function (req, res) {
  console.log("Backend!!");
  console.log("Llego post user al index!!");
  let body = req.body;
  mu.insertBusiness(body)
    .then((doc) => {
      res.redirect("/");
    })
    .catch((err) => console.log(err));
});

// Define routes.
router.get("/login", function (req, res) {
  console.log("entra al render de login");
  res.render("login2");
});

router.post(
  "/login",
  passport.authenticate("local-login", {
    successRedirect: "/login",
    failureRedirect: "/login",
  }),
  function (req, res) {
    res.redirect("/");
  }
);

router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

router.get(
  "/profile",
  require("connect-ensure-login").ensureLoggedIn(),
  function (req, res) {
    res.render("profile", { user: req.user });
  }
);

router.get("/getUser", (req, res) => {
  console.log("getting user in routes", req.user);
  process.nextTick(function () {
    return res.json(req.user || null);
  });
});

router.get("/signup", function (req, res) {
  // render the page and pass in any flash data if it exists
  res.render("signup.ejs");
});

// process the signup form
router.post(
  "/signup",
  passport.authenticate("local-signup", {
    successRedirect: "/login", // redirect to the secure profile section
    failureRedirect: "/login", // redirect back to the signup page if there is an error
    failureFlash: true, // allow flash messages
  })
);

// =====================================
// PROFILE SECTION =====================
// =====================================
// we will want this protected so you have to be logged in to visit
// we will use route middleware to verify this (the isLoggedIn function)
router.get("/profile", isLoggedIn, function (req, res) {
  console.log("get profile");
  res.render("profile", {
    user: req.user, // get the user out of session and pass to template
  });
});

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
  console.log("inside function is isLoggedIn");
  // if user is authenticated in the session, carry on
  if (req.isAuthenticated()) return next();

  // if they aren't redirect them to the home page
  res.redirect("/");
}

module.exports = router;
