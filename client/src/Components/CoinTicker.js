// import { useState, useEffect } from 'react'
// import useFetch from '../Handlers/useFetch'

// function CoinTicker() {

// 	const [error, setError] = useState(null)
// 	const [isLoaded, setIsLoaded] = useState(false)
// 	const [items, setItems] = useState()

// 	// Remarque : le tableau vide de dépendances [] indique
// 	// que useEffect ne s’exécutera qu’une fois, un peu comme
// 	// componentDidMount()
    
// 	const res = useFetch('http://localhost:8080/coinTicker', {})
// 	console.log('reponse du serv non parsée', res)
// 	setItems(JSON.parse(res))
// 	return (
// 		<ul>
// 			{items.map(item => (
// 				<li key={item.id}>
// 					{item.name} {item.price}
// 				</li>
// 			))}
// 		</ul>
// 	)
// }

// export default CoinTicker