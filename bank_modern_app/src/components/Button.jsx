import React from 'react'

const Button = ({styles}) => {
  return (
    <div className={styles}>
      <button type="button" className={`py-4 px-6 
      bg-blue-gradient font-poppins font-medium text-[18px] 
      text-primary outline-none rounded-2xl rounded-[10px]`}>
        Get Started
      </button>
    </div>
  )
}

export default Button