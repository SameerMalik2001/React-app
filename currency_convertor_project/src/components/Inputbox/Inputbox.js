import React, {useId} from 'react';
import './style.css'
function Inputbox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyoption = [],
    selectcurrency = 'usd',
    amountDiable = false,
    currencydisable = false
}){
    const labelId = useId()
    const labelId1 = useId()
    return (
        <div>
            <label htmlFor={labelId}>{label}</label>
            <input id={labelId} type="number" placeholder='Amount'
            disabled={amountDiable} 
            value={amount}
            onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}/>
            <br />
            <br />
            <label htmlFor={labelId1}>Currency Type </label>
            <select id={labelId1} value={selectcurrency}
                onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
                disabled={currencydisable}
            >
                {
                currencyoption.map((currancy)=>{
                    return (
                        <option key={currancy} value={currancy}>
                            {currancy.toUpperCase()}
                        </option>
                    )
                })
                }
            </select>
        </div>
    );
}

export default Inputbox;
