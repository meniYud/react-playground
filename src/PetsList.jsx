import React from "react";
import Pet from "./Pet";

export const PetsList = ({ pets }) => {
  const classname = `grid grid-cols-1 gap-4 ${
    pets.length ? "sm:grid-cols-2 lg:grid-cols-3" : ""
  }`;
  return (
    <div className={classname}>
      {!pets.length ? (
        <h1 className="m-auto">no pets found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            key={pet.id}
            id={pet.id}
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
          />
        ))
      )}
    </div>
  );
};
