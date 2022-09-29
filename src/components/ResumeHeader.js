import '../styles/ResumeHeader.css';

function ResumeHeader(props) {
  const { name, location, phone, email } = props.headerContent;

  return (
    <div className="Resume-Header">
      <h1 className="Resume-Header-title">{name}</h1>
      <div className="Resume-Header-subtitle-container">
        <h2 className="Resume-Header-subtitle">{location}</h2>
        <h2 className="Resume-Header-subtitle">{phone}</h2>
        <h2 className="Resume-Header-subtitle">{email}</h2>
      </div>
    </div>
  );
}

export default ResumeHeader;
