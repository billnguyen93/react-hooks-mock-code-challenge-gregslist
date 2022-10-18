import React, {useState} from "react";

function ListingCard({listing, onDeleteListing}) {
  const [isFavorited, setIsFavorited] = useState(false)

  function handleFavoriteClick() {
    setIsFavorited(!isFavorited)
  }

  function handleDelete() {
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method:"DELETE"
    })
    .then(resp => resp.json())
    .then(() => {
      onDeleteListing(listing.id)
    })
  }
      
  
  
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {isFavorited ? (
          <button onClick={handleFavoriteClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavoriteClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span>{listing.location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
