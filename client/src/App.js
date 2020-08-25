import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Ticket from './components/Ticket';
import Input from './components/Input';
import './App.css';

function App() {

  const [ticketsList, setTicketsList] = useState([]);
  const [mutableList, setMutableList] = useState([ticketsList])
  
 
  const importTickets = async () => {
    await axios.get('/api/tickets')
    .then(res => {
        setTicketsList(res.data);
        console.log(res.data)
    })
    .catch(e => alert(e))
  }

  const [counter, setCounter] = useState(0)
  const filteredList = ticketsList.slice();

  const hideTickets = (ticket, index) => {
    if (ticket.hide) {
      filteredList.splice(index , 1);
      setTicketsList(filteredList)
      setCounter(counter + 1)
    }
  }

  // const restoredList = []

  // const restoreTickets = () => {
  //   ticketsList.forEach(ticket )
  // }


  useEffect(()=>{
      setTicketsList(mutableList)
  },[mutableList]);

  return (<>
    <Input importTickets={importTickets} setMutableList={setMutableList}/>
    <counter id="hideTicketsCounter">{counter}</counter>
    <button id="restoreHideTickets" onClick={()=>{
      importTickets();
      setCounter(0)
      console.log(ticketsList)}}>restore</button>
    <Ticket ticketsList={ticketsList} hideTickets={hideTickets}/>
  </>);
}

export default App;
