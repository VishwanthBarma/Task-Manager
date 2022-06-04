import React from 'react';
import Note from './Note';
import { gql, useQuery } from '@apollo/client';

const AllNotesQuery = gql`
  query{
    notes{
      id
      content
      tag
    }
  }
`

function Notes() {
  const { data, loading, error } = useQuery(AllNotesQuery);
  console.log(data.notes);

  if(loading) return <p>Loading...</p>
  if(error) return <p>Oh no.. {error.message}</p>

  return (
    <div className='p-6'>
        <div className=''>
          {
            data.notes.map((note: any) => <Note data={note}/>)
          }
        </div>
    </div>
  )
}

export default Notes