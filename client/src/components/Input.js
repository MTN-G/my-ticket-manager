import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function Input (props) {

    const [currentValue, setCurrentValue] = useState('')

    const importPartlyTickets = (value) => {
        axios.get(`/api/tickets?searchText=${value}`)
        .then(res => {
            props.setMutableList(res.data);
            console.log(res.data)
        })
        .catch(e => alert(e))
      }

    useEffect(()=>{
        if (currentValue === ''){
          props.importTickets()   
        } else {
        importPartlyTickets(currentValue);
    }},[currentValue])
    
    return (
        <input id="searchInput" onChange={(e) => {setCurrentValue(e.target.value)}}>
       </input>
    )
}