import { Component } from "react";
import Note from "./Note";
import "../css/Board.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],
    };
  }

  addNote = () => {
    let notes = this.state.notes;
    notes.push({ id: Date.now() });

    this.setState({ notes });
  };

  deleteNote(id) {
    let newNoteArr = this.state.notes;
    newNoteArr.map((note, index) => {
      if (id === note.id) {
        newNoteArr.splice(index, 1);
      }
    });
    this.setState({
      notes: newNoteArr,
    });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <button
              type="button"
              className="btn btn-success"
              onClick={this.addNote.bind(this)}
            >
              Add
            </button>

            {this.state.notes.map((note) => {
              return (
                <Note
                  key={note.id}
                  id={note.id}
                  deleteHandler={this.deleteNote.bind(this)}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
