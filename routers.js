const express = require("express");

const app = express();

const articlesRouter = express.Router();
const ticketsRouter = express.Router();

app.use("/articles", articlesRouter);
app.use("/tickets", ticketsRouter);

articlesRouter.get("/", (req, res) => {
  const articles = Article.find({});

  res.json(articles);
});

articlesRouter.post("/", (req, res) => {
  const article = new Article({
    name: req.body.name,
    price: req.body.price,
  });

  article.save((err, article) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(article);
    }
  });
});

ticketsRouter.get("/", (req, res) => {
  const tickets = Ticket.find({});

  res.json(tickets);
});

ticketsRouter.post("/", (req, res) => {
  const ticket = new Ticket({
    name: req.body.name,
    price: req.body.price,
  });

  ticket.save((err, ticket) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(ticket);
    }
  });
});

app.listen(3000, () => {
  console.log("API running on port 3000");
});

