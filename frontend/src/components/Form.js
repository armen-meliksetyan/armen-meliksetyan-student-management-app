import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AddStudentForm() {
    return (
      <div>
        <Form.Group className="mb-3">
          <Form.Control placeholder="Full Name" id="name" placeholder="Enter Your Full Name" name="name" onChange={e => changeUserFieldHandler(e)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control placeholder="Username"id="username" placeholder="Enter Your Username" name="username" onChange={e => changeUserFieldHandler(e)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control placeholder="Email" type="email" id="email" name="email" onChange={e => changeUserFieldHandler(e)} required/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="password" placeholder="Password" id="password" placeholder="Enter password" name="password" onChange={e => changeUserFieldHandler(e)} required />
        </Form.Group>
        <Button type="submit" size="lg" onClick={e => onSubmitChange(e)}>Submit</Button>
      </div>
    );
  }
  
  export default AddStudentForm;