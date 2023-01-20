import { useContext } from "react";
import "../styles/cardForm.css"
import AppContext from "../context/AppContext";
import { useState } from "react";


const CardForm = () => {

    const {setCardData ,setStatus} = useContext(AppContext);
    const [error, setError] = useState({
        cardNo: false,
        month: false,
        year: false,
        cvv: false,
        mainError: false

    });
    const [errors, setErrors] = useState({
        cvvError: '',
       dateError: ''
    })
    

    const clearInputOnError = (e) => {
        if (error[e.name] === true) {
            e.value = ''
        }
        else {
            return
        }
    }


    const handleNoVaidity = (field, constrant) => {
        if ((field.value).length > constrant || (field.value).length < constrant) {
            setError({
                ...error,
                [field.name] : true,
                mainError : true
            })
            
            if (field.name === 'cvv') {
                setErrors({
                    ...errors,
                    cvvError: 'invalid value',
                    mainError : true
                })
            }
            else if (field.name === 'year' || field.name === 'month') {
                setErrors({
                    ...errors,
                    dateError : 'invalid value',
                    mainError : true
                })
            }
            else if (field.name === 'cardNo') {
                setErrors({
                    ...errors,
                    cardNo: 'invalid value',
                    mainError: true
                })
                }
            else {
                setErrors({
                    ...errors
                })
            }
        }
        else {
            setError({
                    month: false,
        year: false,
                cvv: false,
        mainError: false
            })
            setErrors({
                cardNo: '',
                 cvvError: '',
       dateError: ''
            })
        }
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submited')
        const { holderName, cardNo, month, year, cvv } = e.target;

        if (!error.mainError) {

            setCardData({
                holderName: holderName.value,
                cardNo: cardNo.value,
                month: month.value,
                year: year.value,
                cvv: cvv.value
            })

            setStatus(true)

        }
        else {
            return
        }
    }


        
    

    return ( 
        <form className="cardForm" onSubmit={(e)=>handleSubmit(e)}>
            <label htmlFor="name">
                CARDHOLDER NAME
                <input type="text" id="name" name="holderName" onChange={(e) => {
                    e.target.value = e.target.value
                    .replace(/[0-9]/g, "")
                }}
                    placeholder="e.g. Jane Appleseed" autoFocus required />
            </label>
            <label htmlFor="number">
                CARD NUMBER
               <input
                
                id="number"
                name="cardNo"
                    placeholder="e.g. 1234 5678 9123 000"
                    minLength={19}
            maxLength={19}
            onChange={(e) => {
              e.target.value = e.target.value
                .replace(/[^0-9]/g, "")
                .replace(/(.{4})/g, "$1 ")
                    .trim();
                
                handleNoVaidity(e.target,19)
            }}
                    required />
                <span className={error ? 'errorMessage' : ''}>{errors.cardNo}</span>
            </label>

            <div className="lower">
                <div className="date">
                    <p>EXP. DATE (MM/YY)</p>
                    <div className="dateInputs">
                         <label htmlFor="month">
                            <input type="number" id="month" name="month"
                            onChange={(e) => {
                                handleNoVaidity(e.target, 2)
                                
                                }} 
                                onBlur={e => clearInputOnError(e.target)}
                                className={error.month ? "error" : ""} min="1" max="12" placeholder="MM" required />
                    </label>
                    <label htmlFor="year">
                            <input type="number" id="year" name="year" min='10'  onChange={(e) => handleNoVaidity(e.target,2)} onBlur={e => clearInputOnError(e.target)} className={error.year ? "error" : ""} placeholder="YY" required />
                    </label>
                    </div>
                       <span className={(error.month || error.year )? 'errorMessage' : ''}>{errors.dateError}</span>
                </div>
                <label htmlFor="cvv" className="cvv">
                    CVC
                    <input type="number" id="cvv" name="cvv" onChange={(e) => {
                        handleNoVaidity(e.target, 3)
                    }} onBlur={e => clearInputOnError(e.target)} placeholder="e.g. 123" className={error.cvv ? "error" : ""} required />
                    <span className={error ? 'errorMessage' : ''}>{errors.cvvError}</span>
                </label>
            </div>
            <input type="submit" value="Confirm" disabled={error.mainError ? true : false} />
        </form>
     );
}
 
export default CardForm;