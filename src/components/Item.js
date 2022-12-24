

export default function Item({ title, description, pubDate, image }) {
    return (
        <>
            <div className="w3-container w3-padding w3-center w3-card-4 w3-margin-bottom w3-round-large">
                <h3><b>{title.toUpperCase()}</b></h3>
                <br />
                <img src={image} alt="Me" className="w3-image" style={{ display: 'block', margin: 'auto' }} width="800" height="533" />
                <h4 className="w3-opacity">{pubDate}</h4>
                <p className="w3-justify">{description}</p>
            </div>
        </>
    )
}