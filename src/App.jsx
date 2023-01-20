import { useState } from 'react';
import './App.css';
import CardSection from './components/cardSection';
import LowerSection from './components/lowerSection';
import AppContext from './context/AppContext';


function App() {
  const [status,setStatus] = useState(false)
  const [cardData, setCardData] = useState({
    cardNo: '0000 0000 0000 0000',
    holderName: 'JANE APPLESEED',
    month: '00',
    year: '00',
    cvv : '000'
  });



  return (
    <div className="App">
      <AppContext.Provider value={{cardData,setCardData,status,setStatus}}>
        <CardSection/>
        <LowerSection/>
      </AppContext.Provider>
    </div>
  );
}

export default App;
