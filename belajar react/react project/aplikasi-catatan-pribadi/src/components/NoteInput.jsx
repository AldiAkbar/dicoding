import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    this.titleMaxLength = 50;
  }
  onTitleChangeEventHandler(event) {
    const title = event.target.value;
    if (title.length <= this.titleMaxLength) {
      this.setState(() => {
        return {
          title: title,
        };
      });
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    const remainingCharacters = this.titleMaxLength - this.state.title.length;

    return (
      <form className="note-input" onSubmit={this.onSubmitEventHandler}>
        <p className="note-input__title__char-limit">
          Remaining characters: {remainingCharacters}
        </p>
        <input
          className="note-input__title"
          type="text"
          placeholder="Ini adalah judul..."
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
        />
        <input
          className="note-input__body"
          type="text"
          placeholder="Tuliskan catatanmu disini..."
          value={this.state.body}
          onChange={this.onBodyChangeEventHandler}
        />
        <button className="note-input button" type="submit">
          Buat
        </button>
      </form>
    );
  }
}

export default NoteInput;
