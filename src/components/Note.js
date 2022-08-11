import { Component, createRef } from "react";
import PropTypes from "prop-types";
import "../css/Note.css";
const GENERIC_NOTE_TITLE = "New Note Title",
  GENERIC_NOTE_BODY = "New Note Body";
class Note extends Component {
  constructor(props) {
    super(props);
    this.titleContent = createRef();
    this.bodyContent = createRef();
    this.state = {
      title: GENERIC_NOTE_TITLE,
      body: GENERIC_NOTE_BODY,
      editMode: false,
    };
  }
  // Note Methods
  handleEdit = () => {
    {
      this.setState({ editMode: true });
    }
  };

  handleSave = () => {
    this.setState({
      title: this.titleContent.current.value,
      body: this.bodyContent.current.value,
      editMode: false,
    });
  };

  handleDelete() {
    this.props.deleteHandler(this.props.id);
  }
  render() {
    let titleElement, bodyElement, buttonArea;

    if (this.state.editMode) {
      titleElement = (
        <textarea
          ref={this.titleContent}
          defaultValue={this.state.title}
          className="title-textarea"
        ></textarea>
      );

      bodyElement = (
        <textarea
          ref={this.bodyContent}
          defaultValue={this.state.body}
          className="card-text"
        ></textarea>
      );

      buttonArea = (
        <button
          type="button"
          className="btn btn-info"
          onClick={this.handleSave.bind(this)}
        >
          Save
        </button>
      );
    } else {
      titleElement = <h5 className="card-title">{this.state.title}</h5>;
      bodyElement = <div className="card-text">{this.state.body}</div>;
      buttonArea = (
        <div className="mt-3 mb-3">
          <button className="btn btn-info" onClick={this.handleEdit.bind(this)}>
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={this.handleDelete.bind(this)}
          >
            Delete
          </button>
        </div>
      );
    }

    return (
      <div className="card mt-5">
        <div className="card-body">
          {titleElement}
          {bodyElement}
          {buttonArea}
        </div>
      </div>
    );
  }
}

Note.defaultProps = {
  title: "A Cool Title",
  body: "A Cool Body",
};

Note.propTypes = {
  title: PropTypes.string,
};

console.log(Note);
export default Note;
