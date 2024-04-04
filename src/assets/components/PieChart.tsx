import { useEffect, useState } from "react";
import ColorChangeCoin from "./ColorChangeCoin";
import { Routes, Link } from "react-router-dom";
import { createSearchParams, useNavigate } from "react-router-dom";
import Chart from "react-google-charts";
import CoinBlock from "./CoinBlock";

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

interface PiechartProps {
  data: CoinData[];
}

function Piechart({ data }: PiechartProps) {
  const getChartData = () => {
    return data.map((coin) => [
      coin.name, // Name
      parseInt(coin.price_usd), // Price
    ]);
  };

  const combinedData = [
    ["Name", "Price"], // Header row
    ...getChartData(), // Data from getChartData
  ];

  const options = {
    title: "Crypto",
  };

  return (
    <>
    <div className="pieChartContainer">
      <Chart
        chartType="PieChart"
        data={combinedData} // Header row and chartData
        options={options}
        width={"100%"}
        height={"300px"}
        
      />
      </div>
    </>
  );
}

export default Piechart;
