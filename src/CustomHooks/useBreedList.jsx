import fetchBreedList from "../api/fetchBreedList";
import { useQuery } from "@tanstack/react-query";

export const useBreedList = (animal) => {
  const results = useQuery(["breeds", animal], fetchBreedList);

  return [results?.data?.breeds ?? [], results.status];
};
