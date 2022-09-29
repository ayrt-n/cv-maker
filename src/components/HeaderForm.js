import InputFormField from './InputFormField';
import '../styles/Form.css';

function HeaderForm(props) {
  const { name, location, phone, email } = props.header;

  return (
    <div className='Form-section'>
      <h1 className='Form-section-header'>Personal Details</h1>
      <InputFormField
        value={ name }
        label='Full Name'
        id='name'
        handleInputChange={ props.handleChange }
      />
      <InputFormField
        value={ location }
        label='Location'
        id='location'
        handleInputChange={ props.handleChange }
      />
      <InputFormField
        value={ phone }
        label='Phone Number'
        id='phone'
        handleInputChange={ props.handleChange }
      />
      <InputFormField
        value={ email }
        label='E-mail'
        id='email'
        handleInputChange={ props.handleChange }
      />
    </div>
  );
}

export default HeaderForm;
