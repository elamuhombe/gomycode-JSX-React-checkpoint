// src/product.js
// Define an object containing details about a Nike product
const productDetails = {
  name: "Nike", // Name of the product
  price: 3500.0, // Price of the product as a double (numeric format)
  description: "Ladies trainers shoes", // Description of the product
  imageURL: "./assets/nike-trainers.png", // Relative path to the image file
};

// Format the price with a thousand separator
productDetails.priceFormatted =
  "Ksh " + productDetails.price.toLocaleString("en-US");

// Export the productDetails object as the default export
export default productDetails;
