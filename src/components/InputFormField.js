import '../styles/Form.css';

function InputFormField(props) {
  const { label, id, objectKey, nestedObjectKey, value } = props;

  return (
    <div className="field">
      <label htmlFor={ id } className="label">{ label }</label>
      <div className="control">
        <input
          type="text"
          value={ value }
          id={ `${id}` }
          data-object-key={ objectKey }
          data-nested-object-key={ nestedObjectKey }
          onChange={ props.handleInputChange }
          className="input">
        </input>
      </div>
    </div>
  );
}

export default InputFormField;
