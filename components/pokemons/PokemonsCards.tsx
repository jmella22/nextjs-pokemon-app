import React, { FC } from "react";
import { Grid } from "@nextui-org/react";
import { PokemonCard } from "./index";
import { SmallPokemon } from "../../interfaces";

interface Props {
  pokemons: SmallPokemon[];
}

export const PokemonsCards: FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} justify="flex-start">
      {pokemons.map((pokemon) => (
        <PokemonCard pokemon={pokemon} key={pokemon.id} />
      ))}
    </Grid.Container>
  );
};
