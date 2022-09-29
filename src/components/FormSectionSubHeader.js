import trashIcon from '../images/trash.svg';
import '../styles/Form.css';

function FormSectionSubHeader(props) {
  const { section, index } = props;

  return (
    <div className="Form-section-sub-header-container">
      <h2 className="Form-section-sub-header">{ section } ({ index + 1 })</h2>
      <img src={ trashIcon } onClick={ props.handleClick } className="small-icon" alt="" />
    </div>
  );
}

export default FormSectionSubHeader;
