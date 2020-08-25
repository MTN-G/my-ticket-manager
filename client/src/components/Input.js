import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function Input (props) {

    const importPartlyTickets = async (value) => {
        const { data } = await axios.get(`/api/tickets?searchText=${value}`)
         props.setTicketsList(data);
      }
    
    return (
        <input id="searchInput" onChange={(e) => {importPartlyTickets(e.target.value)}}>
       </input>
    )
}