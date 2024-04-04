import { useEffect, useState } from "react";
import CoinBlock from "./CoinBlock";
import CoinItemsSearchBar from "./CoinItemsSearchBar";
import { Routes, Route, useNavigate } from "react-router-dom";
import FavoriteBlock from "./FavoriteBlock";
import FullDescCoin from "./FullCoinDesc";
import Piechart from "./PieChart";
import { useSearchParams } from "react-router-dom";

interface CoinData {
  id: string;
  symbol: string;
  name: string;
  nameid: string;
  rank: number;
  price_usd: string;
  percent_change_24h: string;
  percent_change_1h: string;
  percent_change_7d: string;
  price_btc: string;
  market_cap_usd: string;
  volume24: number;
  volume24a: number;
  csupply: string;
  tsupply: string;
  msupply: string;
}

interface APIResp {
  data: CoinData[];
}

function Test() {
  const [data, setData] = useState<APIResp | null>(null);
  const [search, setSearch] = useState<string>("");
  const [favorites, setFavorites] = useState<string[]>([]); // State to store favorite coin ids
  const navigate = useNavigate(); // To navigate to CoinDesc route

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.coinlore.net/api/tickers/");
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        console.warn(error);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const toggleFavorite = (id: string) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const searchData = data
    ? data.data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    : [];

    const favoriteCoinsData = data
    ? data.data.filter((item) => favorites.includes(item.id))
    : []

  return (
    <>
      {data && (
        <main className="dashboardContainer">
          <div className="coinContainer">
            <div className="coinItemsHeader">
              <h2>All Coins</h2>
              <input
                type="text"
                name="searchbar"
                id="searchbar"
                placeholder="Search"
                value={search}
                onChange={handleSearch}
              />
            </div>
            <div className="coinGridContainer">
              {searchData.map((item, index) => (
                <CoinBlock
                  key={item.id}
                  index={index}
                  rank={item.rank}
                  symbol={item.symbol}
                  name={item.name}
                  price_usd={item.price_usd}
                  percent_change_1h={item.percent_change_1h}
                  id={item.id}
                  isFavorite={favorites.includes(item.id)} // Pass whether the coin is a favorite or not
                  toggleFavorite={() => toggleFavorite(item.id)} // Pass toggle function
                />
              ))}
            </div>

            <Routes>
              <Route path="/"></Route>
              <Route path="/CoinDesc" element={<FullDescCoin />} />
            </Routes>
          </div>
          <Piechart data={searchData.slice(0, 8)} />
          <div className="coinContainer">
            <Piechart data={favoriteCoinsData.slice(0, 8)} />

            <div className="coinGridContainerFavorites">
              {data.data.map((item, index) =>
                favorites.includes(item.id) ? (
                  <CoinBlock
                    key={item.id}
                    index={index}
                    rank={item.rank}
                    symbol={item.symbol}
                    name={item.name}
                    price_usd={item.price_usd}
                    percent_change_1h={item.percent_change_1h}
                    id={item.id}
                    isFavorite={favorites.includes(item.id)} // Pass whether the coin is a favorite or not
                    toggleFavorite={() => toggleFavorite(item.id)} // Pass toggle function
                  />
                ) : null
              )}
            </div>
          </div>
        </main>
      )}
    </>
  );
}

export default Test;
