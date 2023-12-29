// src/components/Description.js
import React from "react";
import productDetails from "../product";

/**
 * Description component renders the product description from productDetails.
 * Assumes that productDetails has a 'description' property.
 */
const Description = () => {
  return <span>{productDetails.description}</span>;
};

// Export the Description component as the default export
export default Description;
