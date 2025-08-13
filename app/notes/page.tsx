// import { useState } from 'react';
import css from './NotesPage.module.css';
import { fetchNotes } from '@/lib/api';
import NotesPageClient from './Notes.client';

const Notes = async () => {
  const data = await fetchNotes('', 1);
  return (
    <div className={css.app}>
      <NotesPageClient initialData={data} />
    </div>
  );
};

export default Notes;
