import React, { Component } from "react";
import '../styles/Form.css';

class InputFormField extends Component {
  constructor(props) {
    super(props)

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(e) {
    this.props.handleInputChange(e);
  }

  render() {
    const { label, id, objectKey, value } = this.props

    return (
      <div>
        <label htmlFor={ id }>{ label }</label>
        <input type="text" value={ value } id={ `${id}` } data-object-key={ objectKey } onChange={ this.handleInputChange }></input>
      </div>
    );
  }
}

export default InputFormField;
