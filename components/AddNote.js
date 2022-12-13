import { useState } from 'react';
import styles from "../styles/AddNote.module.css";

export const AddNote = ({ handleAddNote }) => {
    const [noteText, setNoteText] = useState('');
    const characterLimit = 200;

    const handleChange = (event) => {
        if (characterLimit - event.target.value.length >= 0) {
            setNoteText(event.target.value);
        }
    };

    const handleSaveClick = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText);
            setNoteText('');
        }
    };

    return (
        <div className={styles.newNote}>
            <textarea
                rows='8'
                cols='10'
                placeholder='Type to add a note...'
                value={noteText}
                onChange={handleChange}
            ></textarea>
            <div className={styles.noteFooter}>
                <small>
                    {characterLimit - noteText.length} Remaining
                </small>
                <button className={styles.save} onClick={handleSaveClick}>
                    Save
                </button>
            </div>
        </div>
    );
};
