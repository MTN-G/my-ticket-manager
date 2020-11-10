import React from 'react';

export default function Label({ ticket }) {
  const findLabels = (obj) => {
    if (obj.hasOwnProperty('labels')) {
      return (
        <>
          {obj.labels.map((label) => <button className="label" id={label} key={label}>{label}</button>)}
        </>
      );
    }
  };

  return (
    <div>{findLabels(ticket)}</div>
  );
}
