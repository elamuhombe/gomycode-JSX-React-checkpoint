// src/App.js
import React, { useState } from "react";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";
import { Card, Form, Button } from "react-bootstrap";
import productDetails from "./product";
import "./styles.css";

// Main App component
const App = () => {
  // State variables for managing user input and form submission
  const [firstName, setFirstName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Event handler for updating the firstName state
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  // Event handler for handling form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  // JSX rendering of the App component
  return (
    <div className="App">
      {/* Display product details in a Bootstrap Card */}
      <Card style={{ width: "18rem" }}>
        {submitted && <Image imageUrl={productDetails.imageURL} />}
        <Card.Body>
          <Card.Title>
            {/* Display user-entered name or empty string based on submission */}
            <Name name={submitted ? firstName : ""} />
          </Card.Title>
          <Card.Text>
            {/* Display product price */}
            <Price price={productDetails.price} />
          </Card.Text>
          <Card.Text>
            {/* Display product description */}
            <Description description={productDetails.description} />
          </Card.Text>
        </Card.Body>
      </Card>

      {/* Form for capturing user's first name */}
      <Form className="mt-3" onSubmit={handleSubmit}>
        <Form.Group controlId="formFirstName">
          <Form.Label>Enter Your First Name:</Form.Label>
          {/* Input field for entering first name */}
          <Form.Control
            type="text"
            placeholder="Please enter your first name"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </Form.Group>
        {/* Submit button for the form */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      {/* Display a greeting message with the user's first name */}
      <p className="firstName">{submitted && `Hello, ${firstName}!`}</p>
    </div>
  );
};

// Export the App component as the default export
export default App;
