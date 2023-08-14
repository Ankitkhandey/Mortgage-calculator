import React from 'react'
import SliderComponent from './common/SliderComponent'
const CURRENCY="$";
const PERCENTAGE="%"

const SliderSelect = () => {
  return (
    <>
      <SliderComponent 
      label="Home value"
      currency = {CURRENCY}
      amount="3000"
      minAmount="1000"
      maxAmount="10000"
      defaultValue={3000} min={1000} max={10000} step={100} 
      onChange={(e,value)=>console.log(value)}
      />

      <SliderComponent 
      label="Down Payment"
      currency = {CURRENCY}
      amount="1500"
      minAmount="0"
      maxAmount="3000"
      defaultValue={500} min={0} max={3000} step={100} 
      onChange={(e,value)=>console.log(value)}
      />

      <SliderComponent 
      currency = {CURRENCY}
      amount="500"
      label="Loan Amount"
      minAmount="0"
      maxAmount="3000"
      defaultValue={1500} min={0} max={3000} step={100} 
      onChange={(e,value)=>console.log(value)}
      />

      <SliderComponent 
      currency = {PERCENTAGE}
      label="Interest Rate"
      amount="5"
      minAmount="0"
      maxAmount="18"
      defaultValue={5} min={0} max={18} step={1} 
      onChange={(e,value)=>console.log(value)}
      />
    </>
  )
}

export default SliderSelect
