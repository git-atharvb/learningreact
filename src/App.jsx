// import React from 'react';
import Product from './components/Product';

//Declaring a functional component named App
const App = () => {
  const name = "John Doe"
  const person = {
    name: "Jane Doe",
    age: 30,
    city: "New York"
  }

  const obj = {
    ram:'4GB',
    rom:'64GB',
    price: 999
  }
  return (
    // React Fragment : allows us to group multiple elements without adding extra nodes to the DOM.
    <>      
    <div>
      <h1>Hello World</h1>
      <h2>2+5={2+5}</h2>
      <h3>My name is {name}</h3>
      <p>{person.name} is {person.age} years old and lives in {person.city}.</p>
    </div>
    <h1>My React App</h1>
    {/* Rendering the Product component inside the App component */}
    <Product name="iPhone 13" price={999} color="Red" />
    <Product name="Samsung Galaxy S21" price={899} color="White" />
    <Product name="Google Pixel 6" price={799} color="Blue" />
    <Product name="OnePlus 9" price={729} color="Black" ram={obj.ram} rom={obj.rom} price={obj.price} />
    {/* Code Reusibility */}
    {/* Will observe blank for ram rom and price for all other products, only Oneplus has the desired values */}
    </>
  )
}
//Exporting the App component as the default export of this module
export default App
