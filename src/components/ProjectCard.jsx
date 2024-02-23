import { MapPin } from "lucide-react";
import { useState,useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";


const ProjectCard = ({ imageUrl, title, description, location }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  useEffect(() => {
    const image = new Image();
    image.src = imageUrl;
    image.onload = handleImageLoad;

    return () => {
      // Clean up event listener to avoid memory leaks
      image.onload = null;
    };
  }, [imageUrl]);

  return (
    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
      <LazyLoadImage
        className={`w-full h-48 object-cover object-center ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              
       src={imageUrl}
        alt={title}
        loading="lazy"
      />

      <div className="px-6 py-4 flex flex-col justify-between items-stretch">
        <div className="font-bold text-xl mb-2 text-myBlue">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <span className="flex gap-2 items-center py-2"> <MapPin className="text-myOrange"/>{location}</span>
      </div>
    </div>
  );
};

export default ProjectCard;
