import dosomethinggreat from "../about.jpg"

export default function About() {
    return (
        <div className="w3-content w3-padding" style={{maxWidth:'700px'}}>
            <h5 className="w3-center w3-padding-64"><span className="w3-tag w3-wide">ABOUT US</span></h5>
            <p>
                Welcome to our website, where you can find the best trading ideas for bitcoin, commodities, crypto, currencies, indices, and stocks. Our team of experts scours the markets to bring you the most profitable and reliable trading ideas, updated daily. Whether you're a seasoned trader or just starting out, our trading ideas will help you maximize your potential and achieve your financial goals.
            </p>
            <div className="w3-panel w3-leftbar w3-light-grey">
                <p><i>"Rule No. 1 is never lose money. Rule No. 2 is never forget Rule No. 1."</i></p>
                <p>Chairperson of Berkshire Hathaway: Warren Buffett</p>
            </div>
            <img src={dosomethinggreat} alt="About us" style={{width:'100%',maxWidth:'1000px'}} className="w3-margin-top"/>
            <div className="w3-padding"></div>
        </div>
    )
}