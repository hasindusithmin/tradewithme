import { Link } from "react-router-dom"
import ideas from "../ideas.jpg"

export default function Home() {
    return (
        <>
            <header className="w3-display-container w3-content w3-wide" style={{ maxWidth: '1500px' }}>
                <img className="w3-image w3-grayscale-max" src={ideas} alt="Ideas" width="1500" height="800" />
                <div className="w3-display-middle w3-margin-top w3-center">
                    <h1 className="w3-xxlarge w3-text-white"><span className="w3-padding w3-black w3-opacity-min"><b>TRADING</b></span> <span className="w3-text-white"><b>IDEAS</b></span></h1>
                </div>
            </header>
            <div className="w3-container w3-content w3-center w3-padding-64" style={{maxWidth:'800px'}}>
                <h2 className="w3-wide">FOR TRADERS</h2>
                <p className="w3-opacity"><i>We love trading</i></p>
                <p className="w3-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div className="w3-row w3-padding-32">
                    <div className="w3-third">
                        <p><Link to='/bitcoin'>Bitcoin</Link></p>
                        <img src="https://via.placeholder.com/255/808080/ffffff?text=Bitcoin" className="w3-round w3-margin-bottom" alt="Random Name" style={{width:'60%'}} />
                    </div>
                    <div className="w3-third">
                        <p><Link to='/crypyo'>Crypyo</Link></p>
                        <img src="https://via.placeholder.com/255/808080/ffffff?text=Crypyo" className="w3-round w3-margin-bottom" alt="Random Name" style={{width:'60%'}}/>
                    </div>
                    <div className="w3-third">
                        <p><Link to='/stocks'>Stocks</Link></p>
                        <img src="https://via.placeholder.com/255/808080/ffffff?text=Stocks" className="w3-round" alt="Random Name" style={{width:'60%'}} />
                    </div>
                </div>
                <div className="w3-row w3-padding-32">
                    <div className="w3-third">
                        <p><Link to='/commodities'>Commodities</Link></p>
                        <img src="https://via.placeholder.com/255/808080/ffffff?text=Commodities" className="w3-round w3-margin-bottom" alt="Random Name" style={{width:'60%'}} />
                    </div>
                    <div className="w3-third">
                        <p><Link to='/currencies'>Currencies</Link></p>
                        <img src="https://via.placeholder.com/255/808080/ffffff?text=Currencies" className="w3-round w3-margin-bottom" alt="Random Name" style={{width:'60%'}}/>
                    </div>
                    <div className="w3-third">
                        <p><Link to='/indices'>Indices</Link></p>
                        <img src="https://via.placeholder.com/255/808080/ffffff?text=Indices" className="w3-round" alt="Random Name" style={{width:'60%'}} />
                    </div>
                </div>
            </div>
            <footer className="w3-container w3-padding-64 w3-center w3-opacity w3-light-grey w3-xlarge">
                <p className="w3-medium">Powered by <a href="https://vercel.com/" rel="noreferrer" target="_blank">vercel</a></p>
            </footer>
        </>
    )
}