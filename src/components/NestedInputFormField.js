import trashIcon from '../images/trash.svg';
import '../styles/Form.css';

function NestedInputFormField(props) {
  const { id, objectKey, nestedObjectKey, value } = props;

  return (
    <div className="field has-side-icon">
      <div className="control is-expanded">
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
      <img
        src={ trashIcon }
        alt=""
        className="small-icon"
        onClick={ props.handleClick }
        data-object-key={ objectKey }
      />
    </div>
  );
}

export default NestedInputFormField;
