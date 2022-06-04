import React from 'react';
import Note from './Note';
import { gql, useQuery } from '@apollo/client';
import Menu from './Menu';

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

  if(loading) return <p>Loading...</p>
  if(error) return <p>Oh no.. {error.message}</p>

  return (
    <div>
        <Menu />
        <div className='p-6'>
          {
            data.notes.map((note: any) => <Note data={note}/>)
          }
        </div>
    </div>
  )
}

export default Notes