const mongoose = require("mongoose");
const articlesRouter = require("./articles");
const ticketsRouter = require("./tickets");

// articles controller
articlesRouter.get("/", async (req, res) => {
  const articles = await Article.find({});

  res.json(articles);
});

articlesRouter.post("/", async (req, res) => {
  const article = await new Article({
    name: req.body.name,
    price: req.body.price,
  }).save();

  res.json(article);
});

// tickets controller
ticketsRouter.get("/", async (req, res) => {
  const tickets = await Ticket.find({});

  res.json(tickets);
});

ticketsRouter.post("/", async (req, res) => {
  const ticket = await new Ticket({
    name: req.body.name,
    price: req.body.price,
  }).save();

  res.json(ticket);
});

module.exports = {
  articlesRouter,
  ticketsRouter,
};

