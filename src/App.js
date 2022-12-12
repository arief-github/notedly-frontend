import logo from './logo.svg';
import './App.css';
import Pages from './pages';
import GlobalStyles from './components/GlobalStyles';

import { ApolloClient, ApolloProvider, createHttpLink } from '@apollo/client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';

const uri = process.env.REACT_APP_BASE_URL;
const httpLink = createHttpLink({ uri });
const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            authorization: localStorage.getItem('token') || ''
        }
    }
})
const cache = new InMemoryCache();

// configure Apollo Client
const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache,
    resolvers: {},
    connectToDevTools: true
})

const data = {
    isLoggedIn: !!localStorage.getItem('token')
}

//write the cache data on initial load

cache.writeData({ data });
client.onResetStore(() => cache.writeData({ data }));

function App() {
    return (
        <ApolloProvider client={client}>
      <GlobalStyles/>
      <Pages/> 
    </ApolloProvider>
    );
}

export default App;