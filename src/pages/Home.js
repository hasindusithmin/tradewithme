import { useNavigate } from "react-router-dom"
import ideas from "../ideas.jpg"
import bitcoin from "./gifs/bitcoin.gif"
import commodities from "./gifs/commodities.gif"
import currencies from "./gifs/currencies.gif"
import crypto from "./gifs/crypto.gif"
import indices from "./gifs/indices.gif"
import stocks from "./gifs/stocks.gif"

export default function Home() {


    var slideIndex = 0;
    setTimeout(()=>{
        carousel();
    },1000)

    function carousel() {
        var i;
        var x = document.getElementsByClassName("slideshow");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > x.length) { slideIndex = 1 }
        x[slideIndex - 1].style.display = "block";
        setTimeout(carousel, 2000);
    }

    const navigate = useNavigate()

    const render = (asset) => {
        navigate(`/${asset}`)
    }

    return (
        <>
            <header className="w3-display-container w3-content w3-wide" style={{ maxWidth: '1500px' }}>
                <img className="w3-image w3-grayscale-max" src={ideas} alt="Ideas" width="1500" height="800" />
                <div className="w3-display-middle w3-margin-top w3-center">
                    <h1 className="w3-xxlarge w3-text-white"><span className="w3-padding w3-black w3-opacity-min w3-animate-fading"><b>TRADING</b></span> <span className="w3-text-white"><b>IDEAS</b></span></h1>
                </div>
            </header>
            <div className="w3-container w3-content w3-center w3-padding-64" style={{ maxWidth: '800px' }}>
                <h2 className="w3-wide w3-text-grey"><b>TRADING IDEAS</b></h2>
                <p className="w3-justify w3-large">
                    Get the latest and most profitable trading ideas for bitcoin, commodities, crypto, currencies, indices, and stocks – all in one place.
                </p>
                <div className="w3-row w3-padding-32">
                    <div className="w3-third">
                        <img src={bitcoin} className="w3-round w3-margin-bottom" alt="bitcoin" title="bitcoin" style={{ width: '60%' }} onClick={() => { render('bitcoin') }} />
                        <div>BITCOIN</div>
                    </div>
                    <div className="w3-third">
                        <img src={crypto} className="w3-round w3-margin-bottom" alt="crypto" title="crypto" style={{ width: '60%' }} onClick={() => { render('crypto') }} />
                        <div>CRYPTO</div>
                    </div>
                    <div className="w3-third">
                        <img src={stocks} className="w3-round" alt="stocks" title="stocks" style={{ width: '60%' }} onClick={() => { render('stocks') }} />
                        <div>STOCKS</div>
                    </div>
                </div>
                <div className="w3-row w3-padding-32">
                    <div className="w3-third">
                        <img src={commodities} className="w3-round w3-margin-bottom" alt="commodities" title="commodities" style={{ width: '60%' }} onClick={() => { render('commodities') }} />
                        <div>COMMODITIES</div>
                    </div>
                    <div className="w3-third">
                        <img src={currencies} className="w3-round w3-margin-bottom" alt="currencies" title="currencies" style={{ width: '60%' }} onClick={() => { render('currencies') }} />
                        <div>CURRENCIES</div>
                    </div>
                    <div className="w3-third">
                        <img src={indices} className="w3-round" alt="indices" title="indices" style={{ width: '60%' }} onClick={() => { render('indices') }} />
                        <div>INDICES</div>
                    </div>
                </div>
            </div>
            <footer className="w3-content">
                <div className="slideshow w3-panel w3-leftbar w3-light-grey">
                    <p className="w3-serif"><i>"In the business of trading, the market is the game and the players are the pieces."</i></p>
                    <p>Jesse Livermore</p>
                </div>
                <div className="slideshow w3-panel w3-leftbar w3-light-grey">
                    <p className="w3-serif"><i>"The market is a battle between buyers and sellers. The price you paid or received is a consequence of the battle."</i></p>
                    <p> Marty Schwartz</p>
                </div>
                <div className="slideshow w3-panel w3-leftbar w3-light-grey">
                    <p className="w3-serif"><i>"The stock market is a device for transferring money from the impatient to the patient."</i></p>
                    <p>Warren Buffett</p>
                </div>
                <div className="slideshow w3-panel w3-leftbar w3-light-grey">
                    <p className="w3-serif"><i>"Markets are constantly in a state of uncertainty and flux and money is made by discounting the obvious and betting on the unexpected."</i></p>
                    <p>George Soros</p>
                </div>
                <div className="slideshow w3-panel w3-leftbar w3-light-grey">
                    <p className="w3-serif"><i>"Trading is a game of probabilities and it's about finding the edge and then exploiting it."</i></p>
                    <p>Paul Tudor Jones</p>
                </div>
            </footer>
        </>
    )
}