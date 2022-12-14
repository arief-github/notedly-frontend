import React, { useEffect } from 'react';
import { useMutation, gql } from '@apollo/client';
import { GET_NOTES, GET_MY_NOTES } from '../gql/query';
import { NEW_NOTE } from '../gql/mutation';

import NoteForm from '../components/NoteForm';

const NewNote = props => {
	useEffect(() => {
		document.title = 'New Note - Notedly';
	});

	const [data, { loading, error }] = useMutation(NEW_NOTE, {
		refetchQueries: [{ query: GET_MY_NOTES }, { query: GET_NOTES }],
		onCompleted: data => {
			props.history.push(`note/${data.newNote.id}`);
		}
	});

	return (
		<>
			{loading && <p>Loading....</p>}
			{error && <p>Error saving the note</p>}

			<NoteForm action={data}/>
		</>
	)
}

export default NewNote;