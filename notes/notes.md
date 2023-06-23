# Shopping Cart Notes

## Concepts to practice

- React router
- React testing

## Functionalities

- Home page that contains some product images
  - show cart icon on header
  - when cart icon is clicked, open cart in a new page
- Product image will have a button to add product to card
  - if clicked, add the product in card
- When cart is opened, then show the product/s added in the cart
  - if the cart is empty and is opened, then show a message that the cart is empty

## App Structure

- src
  - components
    - --tests-- folder
    - test components files
  - pages
    - Home.js
      use Header.js and ProductImage.js to show home page
      loop through the product images and show product image using the ProductImage.js component
    - Cart.js
      show items added in the cart
  - App.js
  - index.js

## What to test?

- product list
  - is an array of products rendered correctly on the screen
  - if the array of products is not provided, is a message is returned that says "no products"
  - when "add to cart" btn is clicked, a function is run which adds clicked product to the state named "cartProducts" (test on hold for now)
