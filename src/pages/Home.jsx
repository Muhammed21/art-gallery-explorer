import { useEffect, useState, useMemo } from "react";
import { fetchGallery } from "../services/fetchGallery";
import GalleryCard from "../interfaces/components/GalleryCard";
import { Skeleton } from "../interfaces/components/Skeleton";

export default function Home() {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchGallery()
      .then((data) => {
        setArtworks(data.artObjects || []);
      })
      .catch((error) => console.error("Error fetching data:", error))
      .finally(() => setLoading(false));
  }, []);

  const filteredArtworks = useMemo(() => {
    if (!search.trim()) return artworks;

    return artworks.filter((artwork) =>
      artwork.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [artworks, search]);

  const renderedGallery = useMemo(() => {
    return filteredArtworks.map((art) => (
      <GalleryCard
        key={art.id}
        imageUrl={art.webImage?.url}
        title={art.title}
        artist={art.principalOrFirstMaker}
        links={art.links.web}
      />
    ));
  }, [filteredArtworks]);

  return (
    <main className="gallery-section">
      <h1>Une galerie bien remplie</h1>
      <input
        type="search"
        placeholder="Faire une recherche"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="gallery-container">
        {loading ? <Skeleton length={3} /> : renderedGallery}
      </div>
    </main>
  );
}
