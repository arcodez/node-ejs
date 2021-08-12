const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.render("pages/index");
});

router.get("/portfolio-details", (req, res) => {
  res.render("pages/portfolio-details");
});

router.get("/blog", (req,res) => {
  res.render("pages/blog")
})

router.get("/blog-single", (req,res) => {
  res.render("pages/blog-single")
})



module.exports = router;
