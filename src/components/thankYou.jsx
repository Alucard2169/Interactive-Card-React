import { useContext } from 'react';
import thankImage from '../assets/images/icon-complete.svg'
import '../styles/thankyou.css'
import AppContext from '../context/AppContext';

const ThankYou = () => {
    const { setCardData ,setStatus} = useContext(AppContext);

    const handleContinue = () => {
        setCardData({
              cardNo: '0000 0000 0000 0000',
    holderName: 'JANE APPLESEED',
    month: '00',
    year: '00',
    cvv : '000'
        })

        setStatus(false)
    }
    return ( 
        <div className="thankYou">
            <div className="top">
                <img src={thankImage} alt="Thank you" />
            </div>
            <section>
                <h1>THANK YOU!</h1>
                <p>We've added your card details</p>
            </section>
            <button onClick={handleContinue}>Continue</button>
        </div>
     );
}
 
export default ThankYou;