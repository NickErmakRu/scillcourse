import React from 'react';

interface IItem {
  id: string;
  text: string;
  onClick: (id: string) => void;
  className: string;
  As?: 'a' | 'li' | 'button' | 'div';
}

interface IGenericListProps {
  list: IItem[];
}

// export function MyList({ list }: IMyListProps) {
//   return (
//     <ul>
//       {
//         list.map((item) => (
//           <li onClick={() => item.onClick(item.id) } key={ item.id }>{ item.value }</li>
//         ))
//       }
//     </ul>
//   )
// }

export function GenericList({ list }: IGenericListProps) {
  return (
    <>
      {
        list.map(({ As = 'div', text, onClick, className, id}) => (
          <As
            className={ className }
            onClick={() => onClick(id)}
            key={ id }
          >
            { text }
          </As>
        ))
      }
    </>
  )
}