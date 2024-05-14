const express = require("express");
const serverless = require("serverless-http");

const blogs = require("../src/blogsData.json");
const app = express();
const router = express.Router();

// Middleware

app.use(express.json());

router.get("/", (req, res) => {
  res.send("Blog server is running!");
});

router.get("/blogs", (req, res) => {
  res.send(blogs);
});

router.get("/blogs/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const blog = blogs.filter((b) => b.id === id);
  res.send(blog);
});

app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);
