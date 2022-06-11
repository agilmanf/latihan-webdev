import React, { Component } from "react";
import Header from "./components/Header";
import NoteCard from "./components/NoteCard";
import Sidebar from "./components/Sidebar";
import { getInitialData } from "./utils";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      notes: getInitialData(),
      activeNotes: [],
      archivedNotes: [],
      mainPage: true,
    };

    this.addNewNote = this.addNewNote.bind(this);
    this.editNote = this.editNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);

    this.moveToArchive = this.moveToArchive.bind(this);
    this.moveToActive = this.moveToActive.bind(this);
    this.setColor = this.setColor.bind(this);

    this.searchActiveNotes = this.searchActiveNotes.bind(this);
    this.searchArchivedNotes = this.searchArchivedNotes.bind(this);
    this.filterNotes = this.filterNotes.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  componentDidMount() {
    this.filterNotes();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.notes !== this.state.notes) this.filterNotes();
  }

  addNewNote() {
    const now = new Date().toISOString();
    const newNote = {
      id: Date.now(),
      title: "Untitle",
      body: "",
      createdAt: now,
      archived: false,
      color: "",
    };

    this.setState({ ...this.state, notes: [...this.state.notes, newNote] });
  }

  editNote(id, editedNote) {
    const updatedNotes = this.state.notes.map((note) =>
      note.id === id ? editedNote : note
    );

    this.setState({ ...this.state, notes: updatedNotes });
  }

  deleteNote(id) {
    const newNotes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ ...this.state, notes: newNotes });
  }

  filterNotes() {
    const _activeNotes = this.state.notes.filter((note) => !note.archived);
    const _archivedNotes = this.state.notes.filter((note) => note.archived);

    this.setState({
      ...this.state,
      archivedNotes: _archivedNotes,
      activeNotes: _activeNotes,
    });
  }

  setColor(id, color) {
    const updatedNotes = this.state.notes.map((note) => {
      return note.id === id ? { ...note, color } : note;
    });

    this.setState({ ...this.state, notes: updatedNotes });
  }

  moveToArchive(id) {
    const newNotes = this.state.notes.map((note) => {
      return note.id === id ? { ...note, archived: true } : note;
    });
    this.setState({ ...this.state, notes: newNotes });
  }

  moveToActive(id) {
    const newNotes = this.state.notes.map((note) => {
      return note.id === id ? { ...note, archived: false } : note;
    });
    this.setState({ ...this.state, notes: newNotes });
  }

  changePage(selected) {
    this.setState({
      ...this.state,
      mainPage: selected,
    });
  }

  async searchActiveNotes(keyword) {
    await this.filterNotes();
    const regex = new RegExp(`.*${keyword}.*`, "ig");

    const searchedNotes = this.state.activeNotes.filter(
      (note) => note.title.match(regex) !== null
    );

    this.setState({
      ...this.state,
      activeNotes: searchedNotes,
    });
  }

  async searchArchivedNotes(keyword) {
    await this.filterNotes();
    const regex = new RegExp(`.*${keyword}.*`, "ig");

    const searchedNotes = this.state.archivedNotes.filter(
      (note) => note.title.match(regex) !== null
    );

    this.setState({
      ...this.state,
      archivedNotes: searchedNotes,
    });
  }

  render() {
    return (
      <main className="container">
        <aside>
          <Sidebar changePage={this.changePage} />
        </aside>
        <section className="content">
          {this.state.mainPage ? (
            <Header
              activePage={this.state.mainPage}
              searchNote={this.searchActiveNotes}
            />
          ) : (
            <>
              <Header
                activePage={this.state.mainPage}
                searchNote={this.searchArchivedNotes}
              />
            </>
          )}

          <hr />
          <div className="notecard-container">
            {this.state.mainPage ? (
              <>
                {this.state.activeNotes.map((note) => (
                  <NoteCard
                    note={note}
                    key={note.id}
                    deleteNote={this.deleteNote}
                    moveNote={this.moveToArchive}
                    setColor={this.setColor}
                    editNote={this.editNote}
                  />
                ))}
                <div className="note-add" onClick={this.addNewNote}>
                  <ion-icon name="add-circle"></ion-icon>
                </div>
              </>
            ) : this.state.archivedNotes.length !== 0 ? (
              this.state.archivedNotes.map((note) => (
                <NoteCard
                  note={note}
                  key={note.id}
                  deleteNote={this.deleteNote}
                  moveNote={this.moveToActive}
                  setColor={this.setColor}
                  editNote={this.editNote}
                />
              ))
            ) : (
              "Tidak ada Catatan"
            )}
          </div>
        </section>
      </main>
    );
  }
}
