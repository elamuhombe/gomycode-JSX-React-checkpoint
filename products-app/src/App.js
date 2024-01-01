// src/App.js
import React, { useState } from "react";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import { Card, Form, Button } from "react-bootstrap";
import productDetails from "./product";
import "./styles.css";

const App = () => {
  // State for the first name
  const [firstName, setFirstName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  // State for image url
  const [imageURL, setImageURL] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if firstName is not empty before allowing submission
    if (firstName.trim() === "") {
      alert("Please enter your first name before submitting.");
      return; // Do not proceed with form submission
    }

    setSubmitted(true);
    // Set the image URL based on the product details
    setImageURL(productDetails.imageURL);
  };

  return (
    <div className="App">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>
            <Name name={submitted ? firstName : ""} />
            {/* Display the Image component when the form is submitted */}
            {submitted && <img src={imageURL} alt="Product" />}
          </Card.Title>
          <Card.Text>
            <Price price={productDetails.price} />
          </Card.Text>
          <Card.Text>
            <Description description={productDetails.description} />
          </Card.Text>
        </Card.Body>
      </Card>

      <Form className="mt-3" onSubmit={handleSubmit}>
        <Form.Group controlId="formFirstName">
          <Form.Label>Enter Your First Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Please enter your first name"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <p className="firstName">{submitted && `Hello, ${firstName}!`}</p>
    </div>
  );
};

export default App;
