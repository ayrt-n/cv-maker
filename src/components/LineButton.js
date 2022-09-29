import '../styles/Form.css';

function LineButton(props) {
  return (
    <div
      className="Form-line-button"
      onClick={ props.handleClick }
      data-object-key={ props.objectKey }
    >
      <div className="plus">+</div>
      { props.text }
    </div>
  );
}

export default LineButton;
