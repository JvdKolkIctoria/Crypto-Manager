
import { Route, Routes } from 'react-router-dom';
import '../styling/style.css';
import CoinCounter from  "./CoinCounter";
import Header from "./Header";
import CoinBlock from './CoinBlock';
import AboutMe from './AboutMe';
import FullDescCoin from './FullCoinDesc';

//https://i.pinimg.com/564x/c6/85/5f/c6855f0ddeeaeb93687a6c10d6b2cfb1.jpg
function dashboard() {
    

    return(
        
        <div className='dashboard'>
            <Header/>
            <Routes>
                <Route path="/" element={<CoinCounter/>}/>
                <Route path="/AboutMe" element={<AboutMe/>}/>
                <Route path="/CoinDesc" element={<FullDescCoin/>}/>
            </Routes>

        </div>
    );
}

export default dashboard
