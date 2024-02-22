

const ProjectCard = ({ imageUrl, title, description,location }) => {
  return (
    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-48 object-cover object-center" src={imageUrl} alt={title} />

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-myBlue">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <span></span>
      </div>

      
    </div>
  );
};

export default ProjectCard;
