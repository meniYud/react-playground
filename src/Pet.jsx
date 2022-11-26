import { Link } from "react-router-dom";
const emptyImage = `http://pets-v2.dev-apis.com/pets/none.jpg`;

const Pet = ({ name, animal, breed, images, location, id }) => {
  let hero = emptyImage;
  if (images.length) {
    hero = images[0];
  }
  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>
          {animal} - {breed} - {location}
        </h2>
      </div>
    </Link>
  );
};

export default Pet;
