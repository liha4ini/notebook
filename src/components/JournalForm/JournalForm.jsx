import s from './JournalForm.module.css'
import {useState} from "react";
import {Button} from "../Button/Button";

import CalendarIcon from '/Calendar.svg'
import FolderIcon from '/Folder.svg'

export const JournalForm = ({addNewTask}) => {
    const [error, setError] = useState(false)

    const addJournalForm = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const formProps = Object.fromEntries(formData)

        if (formProps.title === '' || !formProps.text) {
            setError(true)
        } else {
            addNewTask(formProps)
        }
    }

    return (
        <>
            <form className={s.journalForm} onSubmit={addJournalForm}>
                <div>
                    <input
                        type="text"
                        name='title'
                        className={s.inputTitle}
                    />
                </div>
                <div className={s.formRow}>
                    <label htmlFor="date" className={s.formLabel}>
                        <img src={CalendarIcon} alt="calendar icon"/>
                        <span>Data</span>
                    </label>
                    <input
                        type="date"
                        name='date'
                        id='date'
                        className={s.input}
                    />
                </div>
                <div className={s.formRow}>
                    <label htmlFor="tag" className={s.formLabel}>
                        <img src={FolderIcon} alt="folder icon"/>
                        <span>Tags</span>
                    </label>
                    <input
                        type="text"
                        name='tag'
                        id='tag'
                        className={s.input}
                    />
                </div>
                <textarea
                    name="text"
                    id="" cols="30"
                    rows="10"
                    className={s.input}
                >
                </textarea>
                <Button text='Сохранить' />
            </form>
        </>
    );
};