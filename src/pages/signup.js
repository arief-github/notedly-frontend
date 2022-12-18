import React, { useEffect, useState } from 'react';
import { useMutation, useApolloClient, gql } from '@apollo/client';
import styled from 'styled-components';

import Button from '../components/Button';
import UserForm from '../components/UserForm';

import { SIGNUP_USER } from '../gql/mutation';

const SignUp = (props) => {
    const [values, setValues] = useState();

    const onChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }

    useEffect(() => {
        document.title = 'Sign Up - Notedly';
    });

    const client = useApolloClient();

    const [signUp, { loading, error }] = useMutation(SIGNUP_USER, {
        onCompleted: data => {
            // console.log the JSON Web Token when the mutation is complete
            // console.log(data.signUp);
            localStorage.setItem('token', data.signUp);
            client.cache.writeData({ data: { isLoggedIn: true } })
            props.history.push('/');
        }
    });

    return (
       <>
       	<UserForm action={signUp} formType="signup"/>
       	{loading && <p>Loading...</p>}
       	{error && <p>Error Creating an account!</p>}
       </>
    )
};

export default SignUp;