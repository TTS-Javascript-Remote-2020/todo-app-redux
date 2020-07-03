import React, {Component} from 'react';
import '../css/Note.css';

class Note extends Component {
  constructor() {
    super();
    this.state = {
      editMode: false,
      messageToEdit: {
        title: '',
        body: '',
        index: ''
      }
    }
  }

  componentDidMount() {
    this.setState({
      editMode: false
    })
  }

  handleEdit = () => {
  this.setState({
    editMode: true,
    messageToEdit: {
      id: this.props.id,
      title: this.props.title,
      body: this.props.body
    }
  });
  }

  handleChange = (event) => {
    this.setState({
      messageToEdit: {...this.state.messageToEdit, [event.target.name]: event.target.value}
    })
  }

  handleSave = () => {
    this.props.onSaveClicked(this.state.messageToEdit);
    this.setState({
      editMode: false,
      messageToEdit: {
        title: '',
        body: '',
        index: ''
      }
    })
  }

  // handleDelete = () => this.props.deleteHandler(this.props.id)
  handleDelete = () => this.props.onDeleteClicked(this.props.id)


  render() {
    let titleElement, bodyElement,buttonArea;
    if (this.state.editMode) {
      // titleElement = <textarea ref="titleContent" className="title-textarea" placeholder={this.props.title}></textarea>;
      // bodyElement = <textarea ref="bodyContent" className="body-textarea" placeholder ={this.props.body}></textarea>;
      titleElement = <textarea className="title-textarea" placeholder={this.state.messageToEdit.title} name="title" onChange={this.handleChange}></textarea>;
      bodyElement = <textarea className="body-textarea" placeholder={this.state.messageToEdit.body} name="body" onChange={this.handleChange}></textarea>;
      buttonArea = <div><button className="btn btn-primary" onClick={this.handleSave}>Save</button></div>;
    } else {
      titleElement = <h5>{this.props.title}</h5>;
      bodyElement = <p>{this.props.body}</p>;
      buttonArea = <div><button className="btn btn-info" onClick={this.handleEdit}>Edit</button><button className="btn btn-danger" onClick={this.handleDelete}>Delete</button></div>;
    }

    return (
      <div className="col-sm-6">
        <div className="card card-view">
          <div className="card-body">
            {titleElement}
            {bodyElement}
            {buttonArea}
          </div>
        </div>
      </div>
    );
  }
}

export default Note;


// class Note extends Component {
//   constructor() {
//     super();
//     this.state = {
//       title: "A cool title",
//       body: "A cool body",
//       editMode: false
//     }
//   }
//
//   componentDidMount() {
//     this.setState({
//       title: this.props.title || 'Edit to add a title',
//       body: this.props.body || 'Edit to add content',
//       editMode: false
//     })
//   }
//
//   handleEdit = () => {
//   this.setState({
//     editMode: true
//   });
//   }
//
//   handleSave = () => {
//     this.setState({
//       title: this.refs.titleContent.value,
//       body: this.refs.bodyContent.value,
//       editMode: false
//     })
//     let saveNote = {
//       id: this.props.id,
//       title: this.refs.titleContent.value,
//       body: this.refs.bodyContent.value
//     }
//
//     this.props.onSaveClicked(saveNote)
//   }
//
//   // handleDelete = () => this.props.deleteHandler(this.props.id)
//   handleDelete = () => this.props.onDeleteClicked(this.props.id)
//
//
//   render() {
//     let titleElement, bodyElement,buttonArea;
//     if (this.state.editMode) {
//       titleElement = <textarea ref="titleContent" className="title-textarea" placeholder={this.state.title}></textarea>;
//       bodyElement = <textarea ref="bodyContent" className="body-textarea" placeholder ={this.state.body}></textarea>;
//       buttonArea = <div><button className="btn btn-primary" onClick={this.handleSave}>Save</button></div>;
//     } else {
//       titleElement = <h5>{this.state.title}</h5>;
//       bodyElement = <p>{this.state.body}</p>;
//       buttonArea = <div><button className="btn btn-info" onClick={this.handleEdit}>Edit</button><button className="btn btn-danger" onClick={this.handleDelete}>Delete</button></div>;
//     }
//
//     return (
//       <div className="col-sm-6">
//         <div className="card card-view">
//           <div className="card-body">
//             {titleElement}
//             {bodyElement}
//             {buttonArea}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
//
// export default Note;
