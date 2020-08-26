/* eslint-disable no-param-reassign */
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

app.post('/api/tickets/:ticketId/done', async (req, res) => {
  const tickets = JSON.parse(await fs.readFile('./data.json'));
  const ticketsTemp = tickets.map((ticket) => {
    if (ticket.id === req.params.ticketId) {
      ticket.done = true;
    }
    return ticket;
  });
  fs.writeFile('./data.json', JSON.stringify(ticketsTemp));
  res.send({ updated: true });
});

app.post('/api/tickets/:ticketId/undone', async (req, res) => {
  const tickets = JSON.parse(await fs.readFile('./data.json'));
  const ticketsTemp = tickets.map((ticket) => {
    if (ticket.id === req.params.ticketId) {
      ticket.done = false;
    }
    return ticket;
  });
  fs.writeFile('./data.json', JSON.stringify(ticketsTemp));
  res.send({ updated: true });
});

module.exports = app;
