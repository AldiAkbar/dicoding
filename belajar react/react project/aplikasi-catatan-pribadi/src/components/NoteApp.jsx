import React from "react";
import NoteHeader from "./NoteHeader";
import { getInitialData } from "../utils/index";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";
import NoteArchive from "./NoteArchive";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date().toISOString(),
          },
        ],
      };
    });
  }

  onArchiveHandler = (id) => {
    this.setState((prevState) => {
        const updatedNotes = prevState.notes.map((note) => {
          if (note.id === id) {
            return { ...note, archived: true };
          }
          return note;
        });
    
        return { notes: updatedNotes };
      });
  }

  render() {
    return (
      <div>
        <NoteHeader />
        <div className="note-app__body">
          <h2>Buat Catatan</h2>
          <NoteInput addNote={this.onAddNoteHandler} />
          <h3>Catatan Aktif</h3>
          <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler}/>
          <h3>Arsip</h3>
          <NoteArchive />
        </div>
      </div>
    );
  }
}

export default NoteApp;
