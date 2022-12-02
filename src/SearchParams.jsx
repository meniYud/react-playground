import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchSearch from "./api/fetchSearch";
import { Text } from "./FormElements/Text";
import { Select } from "./FormElements/Select";
import { useBreedList } from "./CustomHooks/useBreedList";
import { PetsList } from "./PetsList";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const petsApi = ({ animal, location, breed }) =>
  `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`;

const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });
  const [animal, setAnimal] = useState("");
  const [breeds] = useBreedList(animal);

  const results = useQuery(["search", requestParams], fetchSearch);
  const pets = results?.data?.pets ?? [];

  const locationChangeHandler = (e) => setLocation(e.target.value);
  const animalChangeHandler = (e) => setAnimal(e.target.value);
  const breedChangeHandler = (e) => setBreed(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const obj = {
      animal: formData.get("animal") ?? "",
      breed: formData.get("location") ?? "",
      location: formData.get("breed") ?? "",
    };
    setRequestParams(obj);
  };

  return (
    <div className="search-params">
      <form onSubmit={onSubmit}>
        <Text
          key={"location"}
          inputId={"location"}
          label={"Location"}
          initialText={""}
          placeholder={"Location"}
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
        />

        <button>Submit</button>
      </form>
      <PetsList pets={pets} />
    </div>
  );
};

export default SearchParams;
