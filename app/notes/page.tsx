// import { useState } from 'react';
import css from './NotesPage.module.css';
import { fetchNotes } from '@/lib/api';
import NotesPageClient from './Notes.client';

const Notes = async () => {
  const data = await fetchNotes('', 1);
  // const totalPages = data?.totalPages ?? 0;
  return (
    <div className={css.app}>
      {data?.notes?.length > 0 && <NotesPageClient />}
    </div>
  );
};

export default Notes;
