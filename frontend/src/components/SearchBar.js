import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

function SearchBar() {
    return (
      <Form className="d-flex">
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-2"
        />
        <Button variant="outline-primary">Search</Button>
      </Form>
    );
  }

  export default SearchBar;