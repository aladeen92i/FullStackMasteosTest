//import useFetch from "./useFetch";
import CoinTicker from "./CoinTicker"
import DoubleIt from "./DoubleIt"
import IsEven from "./IsEven"
import LongestString from "./LongestString"
import SumArray from "./SumArray"
import WhatExtension from "./WhatExtension"


const Home = () => {
  // const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">
      {/* { error && <div>{ error }</div> } */}
      {/* { isPending && <div>Loading...</div> } */}
      <DoubleIt />
      <IsEven />
      <WhatExtension />
      <LongestString />
      <SumArray />

    </div>
  );
}
 
export default Home;
