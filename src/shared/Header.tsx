import * as React from "react";
import { hot } from "react-hot-loader/root";
import styles from './header.css';

import { StarWarsNameFunction } from "./StateExamples/StarWarsNameFunction/StarWarsNameFunction";

function HeaderComponent() {
  return (
    <header>
      <h1 className={ styles.example }>Reddit for our own</h1>
      <p>Hello there</p>
      <StarWarsNameFunction />
    </header>
  )
}

export const Header = hot(HeaderComponent);