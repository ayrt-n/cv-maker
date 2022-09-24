import React, { Component } from "react";
import trashIcon from '../images/trash.svg';
import '../styles/Form.css';

class FormSectionSubHeader extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.handleClick(e);
  }

  render() {
    const { section, index } = this.props;

    return (
      <div className="Form-section-sub-header-container">
        <h2 className="Form-section-sub-header">{ section } ({ index + 1 })</h2>
        <img src={ trashIcon } onClick={ this.handleClick } className="small-icon" alt="" />
      </div>
    );
  }
}

export default FormSectionSubHeader;
