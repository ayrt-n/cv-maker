import React, { Component } from "react";
import trashIcon from '../images/trash.svg';
import '../styles/Form.css';

class NestedInputFormField extends Component {
  constructor(props) {
    super(props)

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInputChange(e) {
    this.props.handleInputChange(e);
  }

  handleClick(e) {
    this.props.handleClick(e);
  }

  render() {
    const { id, objectKey, nestedObjectKey, value } = this.props

    return (
      <div className="field has-side-icon">
        <div className="control is-expanded">
          <input type="text" value={ value } id={ `${id}` } data-object-key={ objectKey } data-nested-object-key={ nestedObjectKey } onChange={ this.handleInputChange } className="input"></input>
        </div>
        <img src={ trashIcon } alt="" className="small-icon" onClick={ this.handleClick } data-object-key={ objectKey } />
      </div>
    );
  }
}

export default NestedInputFormField;
