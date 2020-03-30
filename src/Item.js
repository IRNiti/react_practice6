import React from 'react'

function Item(props) {
	return(
      <li key={props.index}>{props.item}</li>
    )
}

export default Item;