import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeListenter = this.onTitleChangeListenter.bind(this);
    this.onBodyChangeListener = this.onBodyChangeListener.bind(this);
    this.onSubmitListener = this.onSubmitListener.bind(this);
  }

  onTitleChangeListenter(event) {
    const { value } = event.target;

    this.setState((prevState) => {
      return {
        ...prevState,
        title: value.length > 50 ? value.slice(0, 50) : value,
      };
    });
  }

  onBodyChangeListener(event) {
    this.setState((prevState) => {
      return {
        ...prevState,
        body: event.target.value,
      };
    });
  }

  onSubmitListener(event) {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState({ title: "", body: "" });
  }

  render() {
    const { title, body } = this.state;

    return (
      <form className="note__form-input" onSubmit={this.onSubmitListener}>
        <input
          type="text"
          placeholder="Title"
          onChange={this.onTitleChangeListenter}
          value={title}
          required
        />
        <p>{title.length}/50</p>
        <textarea
          placeholder="Write down here..."
          onChange={this.onBodyChangeListener}
          value={body}
          required
        />
        <button type="submit">Tambahkan</button>
      </form>
    );
  }
}

export default NoteInput;
