import React from 'react'

const Button = ({bgcolor,color,size,text,borderRadius}) => {
  return (
    <div>
      <button
      type="button"
      style={{backgroundColor:bgcolor,color:color,borderRadius}}
      className={`text-2xl p-3 hover:drop-shadow-xl`}>
        {text}
      
      </button>
    </div>
  )
}

export default Button