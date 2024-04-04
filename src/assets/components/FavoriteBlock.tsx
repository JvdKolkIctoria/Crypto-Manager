import { useEffect, useState } from "react";
import ColorChangeCoin from "./ColorChangeCoin"; 

function FavoriteBlock(props:{index:number,rank:number,name:string,price_usd:string,symbol:string,percent_change_1h:string}){
    
    const Favorite = (index: number) => {

        let favPressed = document.getElementById(`CoinItemFavID${index}`);

        for (let i = 0; i < 20; i++) {
            if(favPressed && index != i ){
                    console.log(index);
                    favPressed.style.color = 'yellow';
            }
            
        }
       

    }
    const checkFavorite = (index:number) => {

        let favPressed = document.getElementById(`CoinItemFavID${index}`) || '';


        /*if(favPressed.style.color !== 'yellow'){
            favPressed.
        }*/
    } 
    
    return( 
    <>
   
    <article key={props.index}>
        <div className="CoinItemBlock">
            <div className="CoinItemTekst">
                <p className="CoinItemRank">{props.rank}</p>
                <div className="CoinItemName">
                    <p>{props.name}</p>
                    <p className="CoinItemSymbol">{props.symbol}</p>
                </div>
                <div onClick={() => Favorite(props.index)} id={`CoinItemFavID${props.index}`}  className="CoinItemFavIcon">*</div>
            </div>
            <ColorChangeCoin index={props.index} percent_change_1h={props.percent_change_1h}/>
                <p className="CoinItemPrice">${props.price_usd}</p>
        </div>
    </article>
    {/* Add more properties as needed */}
    </>
    );

}

export default FavoriteBlock;
