// src/components/Name.js
import React from "react";
import productDetails from "../product";

// Name component responsible for displaying product or user name
const Name = () => {
  // Render the name from productDetails (assuming productDetails has a 'name' property)
  return <span>{productDetails.priceFormatted}</span>;
};

// Export the Name component as the default export
export default Name;
