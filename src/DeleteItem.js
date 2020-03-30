import React from 'react'
import PropTypes from 'prop-types'

function DeleteItem(props) {
  
	return(
    	<button onClick={props.deleteItem} disabled={props.isDisabled}>
          Delete Last Item
        </button>
    )
}

DeleteItem.propTypes = {
		deleteItem: PropTypes.func.isRequired
	};

export default DeleteItem;