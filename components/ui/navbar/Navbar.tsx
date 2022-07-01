import React from "react";
import NextLink from "next/link";

import { useTheme, Text, Spacer, Link } from "@nextui-org/react";

import styles from "./Navbar.module.css";
import Image from "next/image";

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{ backgroundColor: theme?.colors.gray50.value }}
      className={styles.container}
    >
      <Image
        src={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
        }
        width={40}
        height={40}
        alt="poke-ball"
      />
      <NextLink href={"/"} passHref>
        <Link>
          <Text h2>P</Text>
          <Text h3>okemon</Text>
        </Link>
      </NextLink>
      <Spacer css={{ flex: 1 }} />
      <NextLink href={"/favorites"} passHref>
        <Link>
          <Text>Favoritos</Text>
        </Link>
      </NextLink>
    </div>
  );
};
