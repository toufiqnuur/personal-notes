import React from "react";
import "./styles/App.css";
import NoteInput from "./components/NoteInput";
import NoteList from "./components/NoteList";
import SearchBar from "./components/SearchBar";
import { getInitialData } from "./utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchQuery: "",
      notes: getInitialData(),
    };

    this.searchTypingHandler = this.searchTypingHandler.bind(this);
    this.addNoteHandler = this.addNoteHandler.bind(this);
    this.deleteNoteHandler = this.deleteNoteHandler.bind(this);
    this.archiveNoteHandler = this.archiveNoteHandler.bind(this);
  }

  searchTypingHandler(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        searchQuery: event.target.value,
      };
    });
  }

  addNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        ...prevState,
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          },
        ],
      };
    });
  }

  deleteNoteHandler(id) {
    this.setState((prevState) => {
      return {
        ...prevState,
        notes: prevState.notes.filter((note) => note.id !== id),
      };
    });
  }

  archiveNoteHandler(id) {
    const { notes } = this.state;
    notes.forEach((note) => {
      if (note.id === id) note.archived = !note.archived;
    });
    this.setState((prevState) => ({ ...prevState, notes }));
  }

  noteList() {
    const { searchQuery, notes } = this.state;

    const list = searchQuery.trim().length
      ? notes.filter((note) =>
          note.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : notes;

    return list.sort((a, b) => a.date - b.date).reverse();
  }

  render() {
    return (
      <div className="App">
        <h1>Notes</h1>
        <SearchBar onTyping={this.searchTypingHandler} />

        <h2>Buat catatan</h2>
        <NoteInput addNote={this.addNoteHandler} />

        <h2>Catatan</h2>
        <NoteList
          list={this.noteList().filter((note) => !note.archived)}
          deleteNote={this.deleteNoteHandler}
          archiveNote={this.archiveNoteHandler}
        />

        <h2>Arsip</h2>
        <NoteList
          list={this.noteList().filter((note) => note.archived)}
          deleteNote={this.deleteNoteHandler}
          archiveNote={this.archiveNoteHandler}
        />
      </div>
    );
  }
}

export default App;
