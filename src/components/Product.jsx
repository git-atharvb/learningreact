// import React from 'react'

const Product = (props) => {
  return (
    <div>
    Product Component
    {/* Accessing props passed from the parent component (App) and displaying them in the UI */}
        <h1>Product Name: {props.name}</h1>
        <h2>Price: ${props.price.toFixed(2)}</h2>
        <p>Color: {props.color}</p>
        {/* Using props to display product information from the parent component Object */}
        <p>RAM: {props.ram}</p>
        <p>ROM: {props.rom}</p>
        <p>Price: ${props.price.toFixed(2)}</p>
    </div>
  )
}
//Props are a way to pass data from a parent component (App) to a child component (Product). They allow us to make our components reusable and dynamic by providing different values for the same component. 
// In this example, we are passing the name, price, and color of the product as props from the App component to the Product component. 
// The Product component then uses these props to display the product information in the UI.

//Exporting the Product component as the default export of this module
export default Product
