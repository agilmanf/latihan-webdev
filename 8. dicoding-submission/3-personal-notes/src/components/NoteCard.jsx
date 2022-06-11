import React, { Component } from "react";
import { showFormattedDate } from "../utils";
import "../styles/noteCard.css";

export class NoteCard extends Component {
  constructor(props) {
    super(props);
    this.note = props.note;
    this.editNote = props.editNote;
    this.deleteNote = props.deleteNote;
    this.moveNote = props.moveNote;
    this.setColor = props.setColor;

    const initialColor = props.note.color || "";

    this.state = {
      color: initialColor,
      show: "",
      editing: false,
      sisa: 50 - this.note.title.length,
      newTitle: this.note.title,
      newBody: this.note.body,
    };

    this.toggleShowPalette = this.toggleShowPalette.bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.edit = this.edit.bind(this);
    this.editTitle = this.editTitle.bind(this);
    this.submitEdit = this.submitEdit.bind(this);
    this.checkLimit = this.checkLimit.bind(this);
  }

  toggleShowPalette() {
    const value = this.state.show === "" ? "active" : "";
    this.setState({ ...this.state, show: value });
  }

  async changeColor(e) {
    await this.setState({ ...this.state, color: e.target.id });
    this.setColor(this.note.id, e.target.id);
    this.toggleShowPalette();
  }

  edit() {
    this.setState({ ...this.state, editing: true });
  }

  async editTitle(e) {
    let string = e.target.value;
    if (this.state.sisa <= 0) string = this.state.newTitle;

    await this.setState({ ...this.state, newTitle: string });

    // UPDATE SISA KARAKTER //
    this.setState({ ...this.state, sisa: 50 - this.state.newTitle.length });
  }

  submitEdit() {
    const updatedNote = {
      ...this.note,
      title: this.state.newTitle,
      body: this.state.newBody,
    };

    this.editNote(this.note.id, updatedNote);
    this.setState({ ...this.state, editing: false });
  }

  async checkLimit(e) {
    if (this.state.sisa <= 0 && e.key === "Backspace") {
      const string = this.state.newTitle.slice(0, 49);
      await this.setState({ ...this.state, newTitle: string });

      // UPDATE SISA KARAKTER //
      this.setState({ ...this.state, sisa: 50 - this.state.newTitle.length });
    }
  }

  render() {
    return (
      <div className={`note-card ${this.state.color}`}>
        {this.state.editing ? (
          <input
            className="input-title"
            type="text"
            value={this.state.newTitle}
            onKeyUp={(e) => this.checkLimit(e)}
            onChange={(e) => this.editTitle(e)}
            required
          ></input>
        ) : (
          <h3>{this.state.newTitle}</h3>
        )}
        {this.state.editing ? (
          <p className="input-sisa">Sisa Karakter : {this.state.sisa}</p>
        ) : (
          <time>Created at: {showFormattedDate(this.note.createdAt)}</time>
        )}
        <hr />
        {this.state.editing ? (
          <textarea
            className="input-body"
            rows={7}
            value={this.state.newBody}
            required
            onChange={(e) =>
              this.setState({ ...this.state, newBody: e.target.value })
            }
          ></textarea>
        ) : (
          <p>{this.state.newBody}</p>
        )}
        <div className="action-container">
          {this.state.editing ? (
            <ion-icon name="checkbox" onClick={this.submitEdit}></ion-icon>
          ) : (
            <ion-icon name="create-outline" onClick={this.edit}></ion-icon>
          )}
          <div className="color-palette">
            <ion-icon
              name="color-palette-outline"
              onClick={this.toggleShowPalette}
            ></ion-icon>
            <div className={`palette ${this.state.show}`}>
              <div id="orange" onClick={(e) => this.changeColor(e)}></div>
              <div id="green" onClick={(e) => this.changeColor(e)}></div>
              <div id="blue" onClick={(e) => this.changeColor(e)}></div>
              <div id="purple" onClick={(e) => this.changeColor(e)}></div>
            </div>
          </div>
          <ion-icon
            name="folder-outline"
            onClick={() => this.moveNote(this.note.id)}
          ></ion-icon>
          <ion-icon
            name="trash-outline"
            onClick={() => this.deleteNote(this.note.id)}
          ></ion-icon>
        </div>
      </div>
    );
  }
}

export default NoteCard;
