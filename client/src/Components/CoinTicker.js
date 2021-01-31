import { useState, useEffect } from 'react';
import useFetch from '../Handlers/useFetch'

function CoinTicker() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    // Remarque : le tableau vide de dépendances [] indique
    // que useEffect ne s’exécutera qu’une fois, un peu comme
    // componentDidMount()
    
    const res = useFetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {});
    if (!res.response) {
      return <div>Loading...</div>
    }
    const dogName = res.response.status
    const imageUrl = res.response.message

    if (error) {
      return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Chargement...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.name}>
              {item.name} {item.price}
            </li>
          ))}
        </ul>
      );
    }
  }

export default CoinTicker