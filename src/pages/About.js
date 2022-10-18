import dosomethinggreat from "../about.jpg"

export default function About() {
    return (
        <div className="w3-content w3-padding" style={{maxWidth:'700px'}}>
            <h5 className="w3-center w3-padding-64"><span className="w3-tag w3-wide">ABOUT US</span></h5>
            <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</p>
            <div className="w3-panel w3-leftbar w3-light-grey">
                <p><i>"Rule No. 1 is never lose money. Rule No. 2 is never forget Rule No. 1."</i></p>
                <p>Chairperson of Berkshire Hathaway: Warren Buffett</p>
            </div>
            <img src={dosomethinggreat} alt="About us" style={{width:'100%',maxWidth:'1000px'}} className="w3-margin-top"/>
            <div className="w3-padding"></div>
        </div>
    )
}