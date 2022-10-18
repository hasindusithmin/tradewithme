import { Link } from "react-router-dom";


export default function Notfound() {

    return (
        <div className="w3-main w3-content w3-padding" style={{ maxWidth: '1200px', marginTop: '100px' }}>
            <header className="w3-panel w3-center w3-opacity" style={{padding:'128px 16px'}}>
            <h1 className="w3-xlarge"><b>404</b></h1>
            <h1><b>PAGE NOT FOUND</b></h1>
            <ul className="w3-ul">
                <li><Link to="/"><button className="w3-button">Home</button></Link></li>
                <li><Link to="/about"><button className="w3-button">ABOUT</button></Link></li>
                <li><Link to="/contact"><button className="w3-button">CONTACT</button></Link></li>
            </ul>
            </header>
        </div>
    )
}