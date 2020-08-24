const express = require('express');

const app = express();
const fs = require('fs').promises;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', express.static('../client/build/index'));

app.get('/api/tickets/', async (req, res) => {
  const script = await fs.readFile('./data.json');
  const json = JSON.parse(script);
  if (req.query.searchText) {
    const text = req.query.searchText;
    const filtered = json.filter((value) => value.title.toLowerCase().includes(text.toLowerCase()));
    res.send(filtered);
  } else {
    res.send(json);
  }
});

app.post('/tickets/:id/done', async (req, res) => {
  const script = await fs.readFile('./data.json');
  const json = JSON.parse(script);
  json.forEach((ticket, index) => {
    if (ticket.id === req.params.id) {
      json[index].done = true;
      res.send({ updated: true });
    }
  });
});

app.post('/tickets/:id/undone', async (req, res) => {
  const script = await fs.readFile('./data.json');
  const json = JSON.parse(script);
  json.forEach((ticket, index) => {
    if (ticket.id === req.params.id) {
      json[index].done = false;
      res.send({ updated: true });
    }
  });
});

module.exports = app;
