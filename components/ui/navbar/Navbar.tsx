import React from "react";
import NextLink from "next/link";

import { useTheme, Text, Spacer, Link, Switch } from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";

import styles from "./Navbar.module.css";
import Image from "next/image";

export const Navbar = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <div
      // style={{ backgroundColor: theme?.colors.gray50.value }}
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
      <div style={{ display: "flex" }}>
        <NextLink href={"/favorites"} passHref>
          <Link>
            <Text>Favoritos</Text>
          </Link>
        </NextLink>
        <Spacer />
        <Switch
          checked={isDark}
          onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
        />
      </div>
    </div>
  );
};
