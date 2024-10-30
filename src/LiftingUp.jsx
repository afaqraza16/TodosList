import React, { useState } from 'react'

const LiftingUp = () => {
    const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <DisplayComponent  inputValue={inputValue}  />
      <InputComp inputValue={inputValue} setInputValue={setInputValue} />
    </div>
  )
}

export default LiftingUp

const InputComp = ({inputValue, setInputValue} )=>{
    return (
        <>
        <input type="text"
         placeholder='Please Enter Yoour Text '
          value={inputValue} 
          onChange={(e)=> setInputValue(e.target.value)} />
        </>
    )
}
const DisplayComponent =( {inputValue}) =>{
return (
    <>
      <h1 className='text-3xl'> The Display Text is : {inputValue}</h1>
    </>
)
}