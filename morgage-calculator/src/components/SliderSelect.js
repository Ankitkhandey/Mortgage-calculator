import React from 'react'
import SliderComponent from './common/SliderComponent'
const CURRENCY="$";
const PERCENTAGE="%"

const SliderSelect = ({data, setData}) => {
  return (
    <>
      <SliderComponent 
      label="Home value"
      currency = {CURRENCY}
      amount={data.homeValue}
      minAmount="1000"
      maxAmount="10000"
      value= {data.homeValue}
      defaultValue={data.homeValue} min={1000} max={10000} step={100} 
      onChange={(e,value)=>setData({
        ...data,
          homeValue: value
      })}
      />

      <SliderComponent 
      label="Down Payment"
      currency = {CURRENCY}
      amount={data.downPayment}
      minAmount="1000"
      maxAmount={data.homeValue}
      value= {data.downPayment}
      defaultValue={data.downPayment} min={500} max={data.homeValue} step={100} 
      onChange={(e,value)=>setData({
        ...data,
        downPayment: value
      })}
      />

      <SliderComponent 
      currency = {CURRENCY}
      amount={data.homeValue- data.downPayment}
      label="Loan Amount"
      minAmount="0"
      maxAmount={data.homeValue- data.downPayment}
      value={data.loanAmount}
      defaultValue={data.homeValue- data.downPayment} min={0} max={data.homeValue- data.downPayment} step={100} 
      onChange={(e,value)=>setData({
          ...data,
          loanAmount: value
      })}
      />

      <SliderComponent 
      currency = {PERCENTAGE}
      label="Interest Rate"
      amount={data.interest}
      minAmount="0"
      maxAmount="18"
      value={data.interest}
      defaultValue={data.interest} min={0} max={18} step={0.5} 
      onChange={(e,value)=>setData({
        ...data,
        interest:value
      })}
      />
    </>
  )
}

export default SliderSelect
