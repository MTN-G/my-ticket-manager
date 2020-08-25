import React from 'react';

export default function Lable (props) {

    const findLabels = (obj) => {
        if (obj.hasOwnProperty("labels")) {
            return (<>
            {obj.labels.map((label, index) => {return <button className="label" key={index}>{label}</button>})}
           </>)
        }
        else {return <></>}
    }
   

    
    return (<lables>{findLabels(props.ticket)}</lables>)
}