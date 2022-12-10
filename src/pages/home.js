import React from 'react';
import Button from '../components/Button';
import NoteFeed from '../components/NoteFeed';
import { useQuery, gql } from '@apollo/client';

// our GraphQL query, stored as a variable
const GET_NOTES = gql `
	query noteFeed($cursor: String) {
		noteFeed(cursor: $cursor) {
			cursor
			hasNextPage
			notes {
				id
				createdAt
				content
				favoriteCount
				author {
					username
					id
					avatar
				}
			}
		}
	}
`;

const Home = () => {
    const { data, loading, error, fetchMore } = useQuery(GET_NOTES);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>

    return (
    	<NoteFeed notes={data.noteFeed.notes} />
    )
}

export default Home;