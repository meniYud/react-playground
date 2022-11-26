import { useState } from "react";
import { Text } from "./FormElements/Text";
import { Select } from "./FormElements/Select";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const BREEDS = [];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [selectdAnimal, setSelectedAnimal] = useState("");
  const [selectedBreed, setSelectedBreed] = useState("");

  const locationChangeHandler = (e) => setLocation(e.target.value);
  const animalChangeHandler = (e) => setSelectedAnimal(e.target.value);
  const breedChangeHandler = (e) => setSelectedBreed(e.target.value);

  console.log('form rerendered')

  return (
    <div className="search-params">
      <form>
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
    </div>
  );
};

export default SearchParams;
