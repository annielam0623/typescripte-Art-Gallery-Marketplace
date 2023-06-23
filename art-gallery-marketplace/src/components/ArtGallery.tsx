import ImageView from "./ImageView";
import useFetch from "./custom-hooks/useFetch";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Artwork = {
    _id: string;
    // Other properties of an artwork
  };
  
export default function ArtGallery() {
    const { get } = useFetch();
    const [data, setData] = useState<Artwork[]>([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      (async () => {
        try {
          const fetchedData = await get(`/artworks/`);
          setData(fetchedData);
          setIsLoading(false);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      })();
    }, [get]);
  
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    return (
      <div>
        <h1>Art Gallery</h1>
        <div className="grid-container bg-dark">
          {data.map((image) => (
            <Link to={`/artworks/${image._id}`}>
              <ImageView image={image} />
            </Link>
          ))}
        </div>
      </div>
    );
  }
  