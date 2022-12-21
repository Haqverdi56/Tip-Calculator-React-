import React from 'react'
import { useState } from 'react'

function Tip() {
    const [myValues, setMyValues] = useState({bill:0 , percent:0, people:0})

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setMyValues({
            ...myValues,
            [name]: value
        })
        console.log(myValues);
    }

    const total=((myValues.bill*myValues.percent)/100).toFixed(2)
    const tipPerPerson=(total/myValues.people).toFixed(2)
  return (
    <div>
        <div>
            <div>
                <label htmlFor="">Bill</label>
                <input name='bill' onChange={onChange} type="number" min={0}/>
            </div>
            <div>
                <label htmlFor="">Tip Percentage</label>
                <input name='percent' onChange={onChange} type="number" min={0}/>
            </div>
            <div>
                <label htmlFor="">Number of People</label>
                <input name='people' onChange={onChange} type="number" min={0} />
            </div>
        </div>

        <div>
            <p>Total Tip: <span>{total == 0.00 ? "-" : `$${total}`}</span></p>
            <p>Tip Per Person: <span> {tipPerPerson == 0.00 ? "-" : tipPerPerson== "NaN" || tipPerPerson =="Infinity" ? "-" : `$${tipPerPerson}`}</span></p>
        </div>
    </div>
  )
}

export default Tip
