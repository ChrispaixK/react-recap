import React from 'react'

const  Welcome = (props) => {
  return (
    <div>
        <div> Welcome, {props.name} , your age is {props.age}</div>
        
    </div>
  )
}

export default Welcome;