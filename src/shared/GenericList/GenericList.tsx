import React from 'react';

interface IItem {
  value: string;
  id: string;
}

interface IMyListProps {
  list: IItem[]
}

export function MyList({ list }: IMyListProps) {
  return (
    <ul>
      {
        list.map((item, index) => (
          <li key={ index }>{ item.value }</li>
        ))
      }
    </ul>
  )
}