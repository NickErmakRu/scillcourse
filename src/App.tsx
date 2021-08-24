import React from 'react';
import './main.global.css';
import { hot } from 'react-hot-loader/root';
import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardsList } from './shared/CardsList';
import { MyList } from './shared/GenericList/GenericList';
import { generateId } from './utils/react/generateRandomIndex';

const LIST = [ 
  { value: 'some' }, 
  { value: 'other some' }, 
  { value: 'some' } 
].map(generateId)

function AppComponent() {
  return (
    <Layout>
      <Header />
      <Content>
        <CardsList />
        <MyList list={ LIST } />
      </Content>
    </Layout>
  )
}

export const App = hot(() => <AppComponent />);