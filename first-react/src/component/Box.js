import React from 'react'

const Box = (props) => {
  return (
    <div className="box">
        <h1> { props.title } </h1>
        <p> { props.item && props.item.img }</p>  
        <h2> { props.result } </h2>
    </div>
  )
}

export default Box

