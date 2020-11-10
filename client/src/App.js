import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Ticket from './components/Ticket';
import Input from './components/Input';
import Labels from './components/LabelNav';
import './App.css';

export default function App() {
  const [ticketsList, setTicketsList] = useState([]);

  const importTickets = async () => {
    const { data } = await axios.get('/api/tickets');
    setTicketsList(data)
  };
  // first load
  useEffect(() => {
    importTickets();
  }, []);

  const [reset, setReset] = useState(false);
  const [counter, setCounter] = useState(0);
  
  return (
    <div className="app">
      <div className="navbar">
        <Input importTickets={importTickets} setTicketsList={setTicketsList} />
        <div className="counter">
          Hidden Results:
          <div id="hideTicketsCounter">{counter}</div>
          <button id="restoreHideTickets" onClick={() => setReset(true)}>Restore</button>
        </div>
      </div>
      <h1 className="title">Ticket Manager</h1>
      <div className="labelsNav">
        <button className="all" onClick={() => { importTickets(); }}>All</button>
        <Labels ticketsList={ticketsList} setTicketsList={setTicketsList} />
      </div>
      <main className="tickets">
        {ticketsList.map((ticket) => (
          <Ticket
            key={ticket.id}
            ticket={ticket}
            counter={counter}
            setCounter={setCounter}
            reset={reset}
            setReset={setReset}
          />
        ))}
      </main>
    </div>
  );
}
