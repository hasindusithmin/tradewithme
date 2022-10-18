import contact from "../contact.jpg"

export default function Contact() {
    return (
        <div className="w3-content w3-padding" style={{ maxWidth: '700px' }}>
            <h5 className="w3-center w3-padding-64"><span className="w3-tag w3-wide">CONTACT US</span></h5>
            <p>Find us at some address at some place.</p>
            <img src={contact} alt="Contact us" className="w3-image" style={{ width: '100%' }} />
            <p><span className="w3-tag">FYI!</span> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney.</p>
            <p><strong>Reserve</strong> a table, ask for today's special or just send us a message:</p>
            <form  target="_blank">
                <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Name" required="" name="Name" /></p>
                <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Title" required="" name="Title" /></p>
                <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Message" required="" name="Message" /></p>
                <p><button className="w3-button w3-black" type="submit" disabled>SEND MESSAGE</button></p>
            </form>
        </div>
    )
}