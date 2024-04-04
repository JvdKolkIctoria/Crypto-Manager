import { useEffect, useState } from "react";

interface CoinItemsSearchBarProps {
    name: string;
    index: CoinData[];
}


function CoinItemsSearchBar(data:coinData[]){


    
const CoinItemsSearchBar: React.FC<CoinItemsSearchBarProps> = ({ name, index }) => {
    // You can now use 'name' here
}
    return( 
    <>
       <form action="">
        
                <input type="text" name="" id="" placeholder="Search"/>
        </form>
    </>
    );
}

export default CoinItemsSearchBar;
