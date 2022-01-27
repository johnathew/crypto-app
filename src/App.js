import { useEffect, useState } from 'react';
import Axios from 'axios'
import Coin from './components/Coin';
import './App.css';

function App() {

const [listOfCoins, setListOfCoins] = useState([]);
const [searchWord, setSearchWord] = useState('')

  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then(
      (response) => {
        setListOfCoins(response.data.coins)
      }
    )
  },[]);

  const filteredCoins = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  })

  return (
    <div className="App"> 
    <h1>Search for your favorite crypto here!</h1>
      <div className="cryptoHeader">
        <input type="text" placeholder='Search' onChange={(event) => {
          setSearchWord(event.target.value)
        }}/>
      </div>
      <div className="cryptoDisplay">
        {filteredCoins.map((coin) => {
          return <Coin 
          name={coin.name} 
          price= {coin.price}
          symbol={coin.symbol} 
          icon={coin.icon}/>
        })} 
        </div>
    </div>
  );
}

export default App;
