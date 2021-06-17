import React from 'react';


function Item(props) {
  return (
   <div id={props.id}>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <p><small>Nos quedan {props.stock} unidades</small></p>
   </div>
  )
}

export default Item