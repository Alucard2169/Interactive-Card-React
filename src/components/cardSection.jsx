import { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/headerTop.css'
import BackCard from './backCard';
import FrontCard from './frontCard';

const CardSection = () => {
    const {cardData} = useContext(AppContext)
    return (
        <div className="cardSection">
            <BackCard cvv={cardData.cvv}/> 
            <FrontCard data={cardData} />
        </div>
    );
}
 
export default CardSection;