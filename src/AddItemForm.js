import React from 'react'

class AddItemForm extends React.Component {
  
  state = {
  	value: ''
  }

handleChange = event => {
    this.setState({ value: event.target.value });
  };

inputIsEmpty = () => {
    return this.state.value === '';
  };

  render() {
	return(
    	<form onSubmit={(event) => this.props.addItem(event, this.state.value)}>
          <input
            type="text"
            placeholder="Enter New Item"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button disabled={this.inputIsEmpty()}>Add</button>
        </form>
    )
  }
}

export default AddItemForm;