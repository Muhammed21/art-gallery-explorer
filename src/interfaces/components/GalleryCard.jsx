import { useState } from "react";
import { Modal } from "./modal";

export default function GalleryCard({ imageUrl, title, artist, links }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <div
        className="gallery-card-container"
        onClick={() => setIsClicked(true)}
      >
        <div className="card-container">
          <img src={imageUrl} alt={title} />
          <h3>{title}</h3>
          <p>{artist}</p>
        </div>
      </div>

      {isClicked && (
        <Modal
          title={title}
          artist={artist}
          setIsClicked={setIsClicked}
          links={links}
        />
      )}
    </>
  );
}
