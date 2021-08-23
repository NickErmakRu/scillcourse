import React from 'react';

// каррирование - отложенный вызов функции 
// add(1)(2) --> 3
const add = (leftSide: number) => (rightSide: number) => leftSide + rightSide; 
const addOne = add(1);
const addSix = add(6);

// addOne(5) --> number

function withKey(key?: string) {
  return <E, T extends React.ComponentType<E>>(component: T) =>
    (props: E, index: number) => 
      React.createElement(
        component,
        { ...props, key: key ? props[key as keyof {}] : index },
        [],
      );
}

const withIdKey = withKey('id');
const withIndexKey = withKey();

interface IBlockProps {
  title: string;
  id: string;
}

function Block(props: IBlockProps) {
  return <div>{ props.title }</div>
}

function Feed(props: { blocks: IBlockProps[] }) {
  return (
    <div>
      { props.blocks.map(withIndexKey(Block))}
    </div>
  )
}

//

function Input({onChange, value }: { onChange: (value: string) => void, value: string }) {
  return (
    <input value={ value } onChange={ getValue(onChange) } />
  )
}

function Checkbox({onChange, value }: { onChange: (value: boolean) => void, value: boolean}) {
  return (
    <input type="checkbox" checked={ value } onChange={ getChecked(onChange) } />
  )
}

function pickFromSyntheticEvent<T extends HTMLElement>() {
  return <K extends keyof T>(key: K) => 
    <E extends ((t: T[K]) => void)>(fn: E) => 
      (event: React.SyntheticEvent<T>) => 
        fn(event.currentTarget[key]);
}

export const getValue = pickFromSyntheticEvent<HTMLInputElement>()('value');
export const getChecked = pickFromSyntheticEvent<HTMLInputElement>()('checked')

//

function NotStandartLink(props: any) {
  return (
    <a onClick={ preventDefault(stopPropagation(props.onClick)) }>Hello</a>
  )
}

function preventDefault<T extends (e: any) => void>(fn: T) {
  return <E extends React.SyntheticEvent<any>>(e: E) => {
    e.preventDefault();
    fn(e);
  }
}
function stopPropagation<T extends (e: any) => void>(fn: T) {
  return <E extends React.SyntheticEvent<any>>(e: E) => {
    e.stopPropagation();
    fn(e);
  }
}