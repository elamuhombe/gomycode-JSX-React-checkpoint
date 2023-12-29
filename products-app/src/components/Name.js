// src/components/Name.js
import React from "react";
import productDetails from "../product";

/**
 * Name component renders the name from productDetails.
 * Assumes that productDetails has a 'name' property.
 */
const Name = () => {
  return <span>{productDetails.name}</span>;
};

// Export the Name component as the default export
export default Name;
