// src/components/Image.js
import React from "react";
import productDetails from "../product";

/**
 * Image component displays an image based on the presence of firstName prop.
 * If firstName is truthy, it renders the image from productDetails.imageURL.
 * @param {string} firstName - The user's first name
 */
const Image = ({ firstName }) => {
  return (
    <div>
      {/* Conditional rendering: Display image if firstName is truthy */}
      {firstName && (
        <img
          src={productDetails.imageURL}
          alt={productDetails.name}
          style={{ maxWidth: "100%", height: "auto" }}
        />
      )}
    </div>
  );
};

// Export the Image component as the default export
export default Image;
