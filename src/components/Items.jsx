// import React from 'react'
// import PropTypes from 'prop-types'

const Items = () => {
    // const age = 30;
    const gmail = true;
    const aadhaar = false;
  return (
  <>
    {/* <div>
      {
    // Conditional Rendering using Ternary Operators
         (age >= 18) ? (<p>You are an adult.</p>) : (<p>You are not an adult.</p>)
       }
    </div> */}
    <div>
        // Conditional Rendering using Logical AND (&&) Operator
      {gmail && <p>You have a Gmail account.</p>}
      {aadhaar && <p>You have an Aadhaar card.</p>}
    </div>
    </>
  )
}

Items.propTypes = {

}

export default Items
