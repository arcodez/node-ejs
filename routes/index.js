const { Router } = require("express");
const router = Router();

router.get("/about", (req, res) => {
  res.render("pages/about");
});

router.get("/", (req, res) => {
  res.render("pages/index");
});

module.exports = router;
