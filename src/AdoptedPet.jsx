import React from "react";

export const AdoptedPet = ({ adoptedPet }) => {
  return adoptedPet ? (
    <div className="pet image-container">
      <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
    </div>
  ) : null;
};
