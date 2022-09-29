import '../styles/Form.css';

function InputFormFieldAddOn(props) {
  const { id, objectKey, nestedObjectKey, value, buttonText } = props;

  return (
    <div className="field has-addons">
      <div className="control is-expanded">
        <input
          type="text"value={ value }
          id={ `${id}` }
          data-object-key={ objectKey }
          data-nested-object-key={ nestedObjectKey }
          onChange={ props.handleInputChange }
          className="input">
        </input>
      </div>
      <div className="control">
        <button
          onClick={ props.handleClick }
          className="button">
            { buttonText }
        </button>
      </div>
    </div>
  );
}

export default InputFormFieldAddOn;
