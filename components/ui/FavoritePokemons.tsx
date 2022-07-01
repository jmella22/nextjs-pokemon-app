import React, { FC } from "react";
import { Grid } from "@nextui-org/react";
import { FavoriteCardPokemon } from "../pokemons";

interface Props {
  favoritePokemons: number[];
}

export const Favorite: FC<Props> = ({ favoritePokemons }) => {
  return (
    <Grid.Container gap={2} direction={"row"} justify={"flex-start"}>
      {favoritePokemons.map((id) => (
        <FavoriteCardPokemon id={id} key={id} />
      ))}
    </Grid.Container>
  );
};
