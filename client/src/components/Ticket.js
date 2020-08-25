import React from 'react';
import Lable from './lable'

export default function Ticket (props) {



 return (<div>
   {props.ticketsList.map((ticket, index) => {
       return <div className="ticket" key={index}>
           <header>{ticket.title}</header>
           <button 
             className="hideTicketButton"
             onClick={()=>{ticket = {...ticket, hide: true}; props.hideTickets(ticket, index)}}>Hide</button>
           <h6>{ticket.content}</h6>
           <Lable ticket={ticket}/>
           <footer>By {ticket.userEmail} | {ticket.creationTime}</footer>
           <hr/>
       </div>
   })}
 </div>
 )

}