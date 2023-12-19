import React, {useContext, useState} from 'react'
import {UserContext} from '../App'

export default function Card() {
    const {CurrentCard} = useContext(UserContext);
    const [Status, setStatus] = useState(false);
    
    
    
    // const fun = () => {
    //     alert("hello")
    // }
  return (
    <div>
        {Object.keys(CurrentCard).length > 0 && CurrentCard ?
        <div className='Card' onClick={() => setStatus(!Status)}>
                <p className='Bank-Name'>{Status ? CurrentCard.Bank_Name : CurrentCard.Bank_Name.substring(0, 3) + "XXXXXXXX"}</p>
                <p className='Debit-Card-No'>{Status ? CurrentCard.Card_No : CurrentCard.Card_No.substring(0, 5) + "XXXX XXXX XXXX" + CurrentCard.Card_No.substring(19)}</p>
                <div style={{backgroundColor:"black", height:"15%"}}></div>
                <div className='Card-details'>
                <div className='Holder-Name'>{Status ? CurrentCard.Name : CurrentCard.Name.substring(0, 3) + "XXXXXXXX"}</div>
                <div className='Expire-Date' >{Status ? CurrentCard.Expire : CurrentCard.Expire.substring(0, 3) + "XX"}</div>
                <div className='CVV' style={{textAlign:'right'}}>{Status ? CurrentCard.Cvv : CurrentCard.Cvv.substring(0,0) + "XXX"}</div>
                </div>
            </div>
            : <div style={{textAlign:'center'}}></div>}
    </div>
  )
}
