import React, { useEffect, useState } from "react";
import { Card, Container, Grid, Image, Text } from "@nextui-org/react";
import { Layout } from "../../components/layouts";
import { Favorite, NoFavorite } from "../../components/ui";
import { localFavorites } from "../../utils";

const favoritespage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.favoritePokemons());
  }, []);

  return (
    <Layout title="Pokemons Favoritos">
      {favoritePokemons.length === 0 ? (
        <NoFavorite />
      ) : (
        <Favorite favoritePokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default favoritespage;
