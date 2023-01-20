import "../styles/frontCard.css";

const FrontCard = ({data}) => {
    return ( 
        <div className="frontCard">
            <div className="top">

            </div>
            <div className="info">
                <p className="accountNo">{data.cardNo}</p>
                <div className="personInfo">
                    <span className="name">{data.holderName}</span>
                    <p className="validDate">{data.month}/{data.year}</p>
                </div>
            </div>
        </div>
     );
}
 
export default FrontCard;