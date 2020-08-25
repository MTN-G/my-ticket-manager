import React, { useState, useEffect } from 'react';
import Lable from './lable'

export default function Ticket ({ticket, index, counter, setCounter, reset, setReset}) {

    const changeClass = (e) => {
        e.target.parentElement.className = 'hideTicket'
      }
    const [classT, setClassT] = useState('ticket')

    useEffect(()=>{
        setCounter(0)
        setClassT('ticket')
    },[reset])

     return <ticket className={classT} key={index}>
            <header>{ticket.title}</header>
            <button 
                className="hideTicketButton"
                onClick={()=>{
                    setClassT('hideTicket')
                    setCounter(counter + 1)
                    setReset(false)}}>Hide</button>
            <h6>{ticket.content}</h6>
            <Lable ticket={ticket}/>
            <footer>By {ticket.userEmail} | {new Date(ticket.creationTime).toUTCString().slice(0,26)}</footer>
            <hr/>
        </ticket>
   }


