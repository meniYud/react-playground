import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AdoptedPetContext from "./AdoptedPetContext";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./api/fetchPet";
import Carousel from "./Carousel";
import Modal from "./Modal";

const Details = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [_, setAdoptedPet] = useContext(AdoptedPetContext);
  const [showModal, setShowModal] = useState(false);
  const results = useQuery(["details", id], fetchPet);

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🐬</h2>
      </div>
    );
  }

  const pet = results.data.pets[0];

  const onAdopt = () => {
    setAdoptedPet(pet);
    navigate("/");
  };

  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.breed} - {pet.city}, {pet.state}
        </h2>
        <button onClick={() => setShowModal(true)}>Adopt {pet.name}</button>
        <p>{pet.description}</p>
        {showModal ? (
          <Modal>
            <div>
              <h1>Would you like to adopt {pet.name}?</h1>
              <div className="buttons">
                <button onClick={onAdopt}>Yey</button>
                <button onClick={() => setShowModal(false)}>Ney</button>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    </div>
  );
};

export default Details;
