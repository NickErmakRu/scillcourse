import React from "react";
import { starWars, uniqueNamesGenerator } from "unique-names-generator";
const styles = require('./starWarsNameFunction.css');

interface IStarWarsNameFunctionState {
  name: string;
  count: number;
}

export function StarWarsNameFunction() {

  const randomName = () => uniqueNamesGenerator({ dictionaries: [starWars], length: 1 });
//   const [name, setName] = React.useState(randomName);
//   const [count, setCount] = React.useState(0);
//   const handleClick = () => {
//     setName(randomName);
//     setCount((prevCount) => prevCount + 1)
//   }

  const [state, setState] = React.useState<IStarWarsNameFunctionState>({
    name: randomName(),
    count: 0
  });
  const handleClick = () => {
    setState((prevState) => ({
      ...prevState,
      count: prevState.count + 1
    }))
    setState((prevState) => ({
      ...prevState,
      name: randomName()
    }))
  }

  return (
    <section className={ styles.container }>
      <span className={ styles.name }>{ state.name }</span>
      <div className={ styles.gap } />
      <span className={ styles.name }>попытка: { state.count }</span>
      <div className={ styles.gap } />
      <button 
        className={ styles.button }
        onClick={ handleClick }
      >
        Мне нужно имя!
      </button>
    </section>
  );
}