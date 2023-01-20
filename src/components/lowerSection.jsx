import CardForm from "./cardForm";
import ThankYou from "./thankYou";
import '../styles/lowerSection.css'
import { useContext } from "react";
import AppContext from "../context/AppContext";

const LowerSection = () => {
    const {status} = useContext(AppContext)
    return ( 
        <main>
            {status ? <ThankYou/> : <CardForm/>}
        </main>
     );
}
 
export default LowerSection;