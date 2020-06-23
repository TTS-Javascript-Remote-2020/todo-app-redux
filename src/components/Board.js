import React, {Component} from 'react';

import Note from './Note';
import '../css/Board.css';

class Board extends Component {
  constructor() {
    super();
    this.state = {
      notes: [
        {
          title: "Class Notes",
          body: "Always use constructors when extending another class"
        },
        {
          title: "My New Address",
          body: "2001 N Lonhill Phoenix, AZ 81234"
        },
        {
          title: "React Notes",
          body: "Everything in React is a component"
        }
      ]
    }
  }

  renderNotes() {
    return this.state.notes.map(note => <Note title={note.title} body={note.body} />)
  }

  addNote = () => {
    this.state.notes.push(
      {
        title: "New Note Title",
        body: "New Note body"
      }
    );
    this.setState(
      {
        notes: this.state.notes
      }
    );
  }

  render() {
    return (
      <div>
        <div className="div-board">
          <div className="row">
            {this.renderNotes()}
          </div>
        </div>
        <div>
          <button
            className="btn btn-success add-button"
            onClick={this.addNote}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default Board;
