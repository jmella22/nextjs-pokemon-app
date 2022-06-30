import React, { FC, ReactNode } from "react";

import Head from "next/head";

import { Navbar } from "../ui";

interface Props {
  children: ReactNode;
  title?: string;
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Jose Mella" />
        <meta
          name="description"
          content="Informacion sobre el pokemon NOMBRE"
        />
        <meta name="keywords" content="NOMBRE, pokemon, pokedex" />
      </Head>

      <Navbar />
      <main>{children}</main>
    </>
  );
};
