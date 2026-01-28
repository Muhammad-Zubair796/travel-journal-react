//Entry.jsx
export default function Entry(props) {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img 
                    className="main-image" 
                    src={props.entry.img.src} 
                    alt={props.entry.img.alt}
                />
            </div>
            
            {/* Give this a class so we can pad it and align it */}
            <div className="info-container">
                <div className="location-line">
                    <img className="marker" src="/marker.png" alt="map marker icon" />
                    <span className="country">{props.entry.country}</span>
                    <a className="google-maps" href={props.entry.googleMapsLink}>View on Google Maps</a>
                </div>

                <h2 className="entry-title">{props.entry.title}</h2>
                <p className="entry-dates">{props.entry.dates}</p>
                <p className="entry-text">{props.entry.text}</p>
            </div>
        </article>
    )
}