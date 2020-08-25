import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Ticket from './components/Ticket';
import Input from './components/Input';
import './CSS/ticket.css'

export default function App() {

  const [ticketsList, setTicketsList] = useState([]);
  
 
  const importTickets = () => {
    axios.get('/api/tickets')
    .then(res => {
        setTicketsList(res.data);
        console.log(res.data)
    })
    .catch(e => alert(e))
  }

  useEffect(()=>{
    importTickets()
  },[])
 
  const [reset, setReset] = useState(false);
  const [counter, setCounter] = useState(0);

  


  return (<>
    <Input importTickets={importTickets}  setTicketsList={setTicketsList}/>
    <button id="restoreHideTickets" onClick={()=>setReset(true)}>Restore</button>
    <counter id="hideTicketsCounter">{counter}</counter>
    {ticketsList.map((ticket, index) => {
      return  <Ticket 
      ticket={ticket} index={index} 
      counter={counter} setCounter={setCounter}
      reset={reset} setReset={setReset}
      />
    })}
  </>);
}

