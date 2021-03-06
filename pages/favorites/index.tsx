import React, { FC, useEffect, useState } from "react";
import { Layout } from "../../components/layouts";
import { Favorite, NoFavorite } from "../../components/ui";
import { localFavorites } from "../../utils";

const FavoritesPage: FC = () => {
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

export default FavoritesPage;
