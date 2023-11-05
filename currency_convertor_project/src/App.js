import Inputbox from "./components/Inputbox/Inputbox";
import { useState } from "react";
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './app.css'

function App() {
  const [from, setfrom] = useState('usd')
  const [to, setto] = useState('inr')
  const [amount, setamount] = useState()
  const [convertedamount, setconvertedamount] = useState(0)
  const [swapping, setswapping] = useState(false)

  const currInfo = useCurrencyInfo(from)

  const options = Object.keys(currInfo)

  const swap = () => {
    setto(from)
    setfrom(to)
    setamount(convertedamount)
    setconvertedamount(amount)
    console.log("*to", to, "\nfrom",from)
    console.log("amount", amount, "convertedamount",convertedamount)
    setswapping(true);
    setTimeout(() => {
      setswapping(false)
    }, 200);
  }
  
  const convert = () => {
    setconvertedamount(amount * currInfo[to])
  }

  console.log("to", to, "\nfrom",from)
  console.log("amount", amount, "convertedamount",convertedamount)
  console.log(swapping)
  return (
    <div className="app">
      <h1>CURRENCY CONVERTER</h1>
      <form onSubmit={(e) => {
        e.preventDefault()
        if(!swapping) {
          convert()
        }
      }}>

        <Inputbox
          label="From "
          amount={amount}
          onCurrencyChange={(curr) => setfrom(curr)}
          selectcurrency={from}
          currencyoption={options}
          onAmountChange={(amount) => setamount(amount)}
        />
        
        <br />

        <button onClick={() => swap()}>SWAP</button>

        <br />
        <br />

        <Inputbox
          label="To "
          amount={convertedamount}
          onCurrencyChange={(curr) => setto(curr)}
          selectcurrency={to}
          currencyoption={options}
          amountDiable={true}
        />
        <br />
        <button type="submit">Convert {from.toUpperCase()} to {to.toUpperCase()}</button>

      </form>
      <p>1 {from.toUpperCase()} = {currInfo[to]} {to.toUpperCase()}</p>
    </div>
  );
}

export default App;
