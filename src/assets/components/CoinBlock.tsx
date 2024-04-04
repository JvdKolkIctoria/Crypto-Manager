import { useEffect, useState } from "react";
import ColorChangeCoin from "./ColorChangeCoin";
import { Routes, Link } from "react-router-dom";
import { createSearchParams, useNavigate } from "react-router-dom";

function CoinBlock(props: {
  index: number;
  rank: number;
  name: string;
  price_usd: string;
  symbol: string;
  percent_change_1h: string;
  id: string;
  isFavorite: boolean;
  toggleFavorite: () => void;
}) {
  const navigate = useNavigate();

  const Favorite = (index: number) => {
    let favPressed = document.getElementById(`CoinItemFavID${index}`);

    for (let i = 0; i < 20; i++) {
      if (favPressed && index != i) {
        console.log(index);
        favPressed.style.color = "yellow";
      }
    }
  };

  return (
    <>
      <article key={props.index}>
        <div className="CoinItemBlock">
          <Link
            to={{
              pathname: "/CoinDesc",
              search: "?id=" + props.id,
            }}
          >
            <div className="CoinItemTekst">
              <p className="CoinItemRank">{props.rank}</p>
              <div className="CoinItemName">
                <p>{props.name}</p>
                <p className="CoinItemSymbol">{props.symbol}</p>
              </div>
            </div>
            <ColorChangeCoin
              index={props.index}
              percent_change_1h={props.percent_change_1h}
            />
            <p className="CoinItemPrice">${props.price_usd}</p>
          </Link>
          <button onClick={props.toggleFavorite}>
            {props.isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>
      </article>
      {/* Add more properties as needed */}
    </>
  );
}

export default CoinBlock;
