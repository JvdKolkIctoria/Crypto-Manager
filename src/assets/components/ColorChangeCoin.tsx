import { useEffect, useState } from "react";

function ColorChangeCoin(props:{index:number,percent_change_1h:string}){
    const isNegative = props.percent_change_1h.includes('-');
    const color = isNegative ? 'red' : 'green'; 

    return( 
    <>
        <div key={props.index}>
            <p className="CoinItemPrice" style={{ color: color }}>{props.percent_change_1h}%</p>
        </div>
        {/* Add more properties as needed */}
    </>
    );
}

export default ColorChangeCoin;
