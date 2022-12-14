import React from 'react';
import { BrowserRouter as Router, Route, Redirect ,Switch } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import Home from './home';
import MyNotes from './mynotes';
import Favorites from './favorites';
import NotePage from './note';
import SignUp from './signup';
import SignIn from './signin';
import NewNote from './newNote';

import Layout from '../components/Layout';

const IS_LOGGED_IN = gql`
	{
		isLoggedIn @client
	}
`;

const Pages = (props) => {
	return (
			<Router>
					<Layout>
						<Route exact path="/" component={Home}/>
						<PrivateRoute path="/mynotes" component={MyNotes}/>
						<PrivateRoute path="/favorites" component={Favorites}/>
						<PrivateRoute path="/new" component={NewNote} />
						<Route path="/note/:id" component={NotePage}/>
						<Route path="/signup" component={SignUp}/>
						<Route path="/signin" component={SignIn}/>
					</Layout>
			</Router>
	)
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { loading, error, data } = useQuery(IS_LOGGED_IN);
  // if the data is loading, display a loading message
  if (loading) return <p>Loading...</p>;
  // if there is an error fetching the data, display an error message
  if (error) return <p>Error!</p>;
  return (
    <Route
      {...rest}
      render={props =>
        data.isLoggedIn === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/signin',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export default Pages;