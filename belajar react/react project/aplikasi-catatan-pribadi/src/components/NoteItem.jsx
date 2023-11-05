// import React from 'react';
import ActionButton from './ActionButton';

function NoteItem({ title, date, body, id, onDelete, onArchive }) {
    return (
        <div className='note-item'>
            <h3 className='note-item__title'>{title}</h3>
            <p className='note-item__date'>{date}</p>
            <p className='note-item__body'>{body}</p>
            <ActionButton id={id} onDelete={onDelete} onArchive={onArchive}/>
        </div>
    )
}
 export default NoteItem;