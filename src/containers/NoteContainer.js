import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Note from '../components/Note'
import * as actions from '../actions/BoardAction'

const NoteContainer = ({ id, title, body, deleteNote, saveNote }) => (
  <Note
    id={id}
    title={title}
    body={body}
    onDeleteClicked={() => {
      deleteNote(id);
    }}
    onSaveClicked={saveNote}
  />
)

NoteContainer.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
}

export default connect(null, actions)(NoteContainer)
