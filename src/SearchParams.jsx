import { useEffect, useState } from "react";
import { Text } from "./FormElements/Text";
import { Select } from "./FormElements/Select";
import Pet from "./Pet";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const BREEDS = [];
const petsApi = ({ animal, location, breed }) =>
  `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`;

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);

  const locationChangeHandler = (e) => setLocation(e.target.value);
  const animalChangeHandler = (e) => setAnimal(e.target.value);
  const breedChangeHandler = (e) => setBreed(e.target.value);

  console.log("form rerendered");

  const onSubmit = (e) => {
    e.preventDefault();
    requestPets();
  };

  useEffect(() => {
    requestPets();
  }, []);

  async function requestPets() {
    const res = await fetch(petsApi({ animal, location, breed }));
    const json = await res.json();
    setPets(json.pets);
  }

  return (
    <div className="search-params">
      <form onSubmit={onSubmit}>
        <Text
          inputId={"location"}
          label={"Location"}
          initialText={""}
          placeholder={"Location"}
          externalChangeHandler={locationChangeHandler}
        />

        <Select
          inputId={"animal"}
          values={ANIMALS}
          label={"Animal"}
          initialValue={""}
          externalChangeHandler={animalChangeHandler}
        />

        <Select
          inputId={"breed"}
          disabled={!Boolean(BREEDS.length)}
          values={BREEDS}
          label={"Breed"}
          initialValue={""}
          externalChangeHandler={breedChangeHandler}
        />

        <button>Submit</button>
      </form>
      {pets.map((pet) => (
        <Pet
          key={pet.id}
          name={pet.name}
          animal={pet.animal}
          breed={pet.breed}
        />
      ))}
    </div>
  );
};

export default SearchParams;
