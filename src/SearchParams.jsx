import { useEffect, useState } from "react";
import { Text } from "./FormElements/Text";
import { Select } from "./FormElements/Select";
import { useBreedList } from "./CustomHooks/useBreedList";
import { PetsList } from "./PetsList";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const petsApi = ({ animal, location, breed }) =>
  `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`;

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);

  const locationChangeHandler = (e) => setLocation(e.target.value);
  const animalChangeHandler = (e) => setAnimal(e.target.value);
  const breedChangeHandler = (e) => setBreed(e.target.value);

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
          key={"location"}
          inputId={"location"}
          label={"Location"}
          initialText={""}
          placeholder={"Location"}
          externalChangeHandler={locationChangeHandler}
        />

        <Select
          key={"animal"}
          inputId={"animal"}
          values={ANIMALS}
          label={"Animal"}
          initialValue={""}
          externalChangeHandler={animalChangeHandler}
        />

        <Select
          key={"breed"}
          inputId={"breed"}
          disabled={!Boolean(breeds.length)}
          values={breeds}
          label={"Breed"}
          initialValue={""}
          externalChangeHandler={breedChangeHandler}
        />

        <button>Submit</button>
      </form>
      <PetsList pets={pets} />
    </div>
  );
};

export default SearchParams;
