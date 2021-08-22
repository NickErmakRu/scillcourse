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
        { ...props, key: key ? props[key as keyof E] : index },
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


