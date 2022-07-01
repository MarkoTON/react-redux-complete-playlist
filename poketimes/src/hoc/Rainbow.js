import React from 'react'

const Rainbow = (WrappedComponent) => {

  const colours = ['red', 'pink', 'orange', 'blue', 'green', 'yellow'];
  const randomColour = colours[Math.floor(Math.random() * 6)];
  const className = randomColour + '-text';

  return (props) => (
    <div className={className}>
      <p>WrappedComponent</p>
      {console.log(props)}
      <WrappedComponent {...props} />
    </div>
  )
  
}

export default Rainbow
