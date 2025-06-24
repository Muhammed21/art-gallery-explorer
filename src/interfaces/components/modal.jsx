export const Modal = ({ title, artist, setIsClicked, links }) => {
  return (
    <div className="modal-overlay" onClick={() => setIsClicked(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        <p>{artist}</p>
        <a href={links}>voir plus de detail</a>
        <br />
        <button onClick={() => setIsClicked(false)}>Fermer</button>
      </div>
    </div>
  );
};
