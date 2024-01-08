
function InputBox({
    amount,
    amountdisabled = false,
    onNumberDefault = false,
    currencyDisabled = false,
    OnCurrencyMapping,
    selectCurrency
}) {


    const id = useId();

    return (
        <>
            <div className=''>
                <div className=''>
                    <label htmlFor={id}>Enter Amount</label>
                    <input
                        id={id}
                        type='numbers'
                        disabled={amountdisabled}
                        className=''
                        value={amount}
                        onChange={onNumberDefault(Number(e.target.value))}

                    />
                </div>
                <div className=''>
                    <select
                    value={selectCurrency}
                        className=''
                      
                        disabled={currencyDisabled}
                        onChange={onNumberDefault( e.target.value)}
                    >
                        {

                            OnCurrencyMapping.map((currency) => { <option key={currency} value={currency}>{currency}</option> })
                        }
                    </select>
                </div>
            </div>
        </>
    )


}

export default InputBox;
