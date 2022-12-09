import logo from './logo.svg';
import './App.css';
import Pages from './pages';
import GlobalStyles from './components/GlobalStyles';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const cache = new InMemoryCache();

// configure Apollo Client
const client = new ApolloClient({
  uri: 'http://localhost:4000/api',
  cache,
  connectToDevTools: true
})

function App() {
  return (
    <ApolloProvider client={client}>
      <GlobalStyles/>
      <Pages/> 
    </ApolloProvider>
  );
}

export default App;
