import React, { useEffect } from 'react';
import { useMutation, useApolloClient, gql } from '@apollo/client';

import UserForm from '../components/UserForm';

import { SIGNIN_USER } from '../gql/mutation';

const SignIn = (props) => {
	useEffect(() => {
		document.title = 'Sign In - Notedly'
	})

	const client = useApolloClient();
	const [signIn, { loading, error }] = useMutation(SIGNIN_USER, {
		onCompleted: (data) => {
			localStorage.setItem('token', data.signIn);
			client.cache.writeData({ data: { isLoggedIn: true } });
			props.history.push('/');
		}
	})

	return (
		<>
			<UserForm action={signIn} formType="signIn"/>
			{loading && <p>Loading ...</p>}
			{error && <p>Error Sign In!</p>}
		</>
	)
}

export default SignIn;