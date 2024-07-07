import React, { useState } from 'react'
import'./App.css';
function App() {
  const [amount, setamount] = useState("");
  const [namount, setNamount] = useState("");
  // State to store the intermediate value
  const [selectCurrency, setSelect] = useState("");
  const [tocurrency, settocurrency] = useState("")

  function handlechange(e) {
    setNamount(e.target.value);
  }

  function handleSelectCurrency(e) {
    setSelect(e.target.value)
    
  }
  function handleToCurrency(e) {
    settocurrency(e.target.value)
    
  }
  async function handleclick() {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/af8a176b7f9d9933bf3ffaed/latest/${selectCurrency}`);
    const data = await response.json();
    const exchangeRate = data.conversion_rates[tocurrency];
    const finalAmount = namount * exchangeRate;
    setamount(finalAmount);
    setNamount("")
  }


  return (
    <div>
      <h1>CURRENCY CONVERTER APP</h1>
      <input type="text" placeholder="Amount" onChange={handlechange} />
      <select name="fromCurrency" onChange={handleSelectCurrency} id="fromCurrency">
        <option value="">Select From Currency</option>
        <option value="USD">USD</option>
        <option value="AED">AED</option>
        <option value="ALL">ALL</option>
        <option value="BBD">BBD</option>
        <option value="BGN">BGN</option>
        <option value="BOB">BOB</option>
        <option value="BSD">BSD</option>
        <option value="CRC">CRC</option>
      </select>
      <select name="toCurrency" onChange={handleToCurrency} id="toCurrency">
        <option value="">Select To Currency</option>
        <option value="INR">INR</option>
        <option value="AED">AED</option>
        <option value="ALL">ALL</option>
        <option value="BBD">BBD</option>
        <option value="BGN">BGN</option>
        <option value="BOB">BOB</option>
        <option value="BSD">BSD</option>
        <option value="CRC">CRC</option>
      </select>
      <button onClick={handleclick}>Exchange</button>
      <h1>Exchange amount  {amount}</h1>
    </div>
  )
}

export default App
