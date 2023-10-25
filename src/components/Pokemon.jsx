import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../store/slices/pokemon/thunks";

export const Pokemon = () => {
  const {
    isLoading,
    pokemons = [],
    page,
  } = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons(1));
  }, []);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <>
      <h3>Page {page}</h3>
      <ul>
        {pokemons.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <button onClick={() => dispatch(getPokemons(page - 1))}>Ant</button>
      <button onClick={() => dispatch(getPokemons(page + 1))}>Next</button>
    </>
  );
};
