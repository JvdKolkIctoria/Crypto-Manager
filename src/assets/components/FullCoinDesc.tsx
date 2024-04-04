import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function FullDescCoin() {
  const [coinData, setCoinData] = useState(null);
  const [loading, setLoading] = useState(true);

  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    async function fetchCoinData() {
      try {
        const response = await fetch(`https://api.coinlore.net/api/ticker/?id=${id}`);
        console.log(response);
        const data = await response.json();
        console.log(data);
        setCoinData(data[0]); // Assuming the API returns an array of objects and we only want the first object
        setLoading(false);
      } catch (error) {
        console.error("Error fetching coin data:", error);
        setLoading(false);
      }
    }

    if (id) {
      fetchCoinData();
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {coinData ? (
        <>

        <div className="centerDesc">
          <h1>{coinData.name}</h1>
          <p>Symbol: {coinData.symbol}</p>
          <p>Rank: {coinData.rank}</p>
          <p>Price USD: {coinData.price_usd}</p>
          <p>Price BTC: {coinData.price_btc}</p>
          <p>Percent Change 1h: {coinData.percent_change_1h}%</p>
          <p>Percent Change 24h: {coinData.percent_change_24h}%</p>
          <p>Percent Change 7d: {coinData.percent_change_7d}%</p>
          <p>Market Cap USD: {coinData.market_cap_usd}</p>
          <p>Volume 24: {coinData.volume24}</p>
          <p>Volume 24a {coinData.volume24a}</p>
          <p>csupply: {coinData.csupply}</p>
          <p>tsupply: {coinData.tsupply}</p>
          <p>msupply: {coinData.msupply}</p>


          </div>

          {/* You can render other properties of the coinData object as needed */}
        </>
      ) : (
        <div>No data available for this coin.</div>
      )}
    </div>
  );
}

export default FullDescCoin;
