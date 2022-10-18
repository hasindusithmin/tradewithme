

export default function Item({ title, description, pubDate, image }) {
    return (
        <>
            <div className="w3-container w3-padding-32 w3-center">
                <h3>{title.toUpperCase()}</h3><br />
                <img src={image} alt="Me" className="w3-image" style={{ display: 'block', margin: 'auto' }} width="800" height="533" />
                <h4>{pubDate}</h4>
                <p>{description}</p>
            </div>
            <hr />
        </>
    )
}