import './css/artistpage.css'
import ArtCarousel from "./Carousel";
import React from 'react';

interface Artist {
  name: string;
  image: string;
  bio: string;
  style: string;
  artworks: string[];
}

interface ArtistViewProps {
  artist: Artist;
}

const ArtistView: React.FC<ArtistViewProps> = ({ artist }) => {
  return (
    <div className='artist-container'>
      <h1 className="text-light">{artist.name}</h1>
      <img style={{ 'borderRadius': '50%', 'marginLeft': 'auto', 'marginRight': 'auto' }} src={artist.image} className='center' alt="Artist" />
      <p className="text-light view-para">{artist.bio}</p>
      <h3 className="text-light">{artist.style}</h3>
      <h2 className="text-light">{artist.name}'s Images</h2>
      {!artist?.artworks?.length
        ? <div>This artist has not posted any work yet.</div>
        : <ArtCarousel artworks={artist.artworks} />}
    </div>
  );
};

export default ArtistView;