import { gql } from '@apollo/client';

const NEW_NOTE = gql`
	mutation newNote($content: String!) {
		newNote(content: $content) {
			id
			content
			createdAt
			favoriteCount
			favoritedBy {
				id
				username
			}
			author {
				username
				id
			} 
		}
	}
`;

export { NEW_NOTE };