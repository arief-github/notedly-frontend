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

const EDIT_NOTE = gql`
  mutation updateNote($id: ID!, $content: String!) {
    updateNote(id: $id, content: $content) {
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

export { NEW_NOTE, EDIT_NOTE };