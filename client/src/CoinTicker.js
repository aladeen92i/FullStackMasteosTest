import { useState, useEffect } from 'react';

function CoinTicker() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    // Remarque : le tableau vide de dépendances [] indique
    // que useEffect ne s’exécutera qu’une fois, un peu comme
    // componentDidMount()
    useEffect(() => {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json")
        myHeaders.append("Accept-Encoding", "deflate, gzip")
        myHeaders.append("X-CMC_PRO_API_KEY", "2de81a53-a7ad-4538-b69b-2aae41b63efc")

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
            mode: 'cors',
            qs: {
                'start': '1',
                'limit': '50',
                'convert': 'USD'
            },
            json: true,
            gzip: true
            }

      fetch(requestOptions)
        .then(res => res.json())
        .then(
          (result) => {
            console.log("fesdfsdfsd" + result)
            setIsLoaded(true)
            setItems(result.items)
          },
          // Remarque : il faut gérer les erreurs ici plutôt que dans
          // un bloc catch() afin que nous n’avalions pas les exceptions
          // dues à de véritables bugs dans les composants.
          (error) => {
            console.log(error)
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
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
// import React, { Component } from "react"
// import useFetch from "./useFetch"

// const CoinTicker = async () => {

//     var promise = useFetch('https://api.coinmarketcap.com/v1/ticker/?limit=10')
//     var result = await promise.json()
//     console.log("wololo", result)
//     return (
//         <div>
//             <ul>
//                 <li>nothing here</li>
//             </ul>
//         </div>
//     )
// }

// export default CoinTicker

//     // todo : add async await to those req
//     // how to handle get requests

//     // const { error, isPending } = useFetch('http://localhost:8000/blogs')

//     // how to post request 

//     //     const blog = { title, body, author }

//     //     fetch('http://localhost:8000/blogs/', {
//     //       method: 'POST',
//     //       headers: { "Content-Type": "application/json" },
//     //       body: JSON.stringify(blog)
//     //     }).then(() => {
//     //       // history.go(-1)
//     //       history.push('/')
//     //     })
//     //   }
