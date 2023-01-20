import '../styles/backCard.css'

const BackCard = ({cvv}) => {
    return ( 
        <div className="backCard">
            <span className="cvv">{cvv}</span>
        </div>
        
     );
}
 
export default BackCard;