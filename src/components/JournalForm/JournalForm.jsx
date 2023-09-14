import './JournalForm.css'
import {useState} from "react";
import {Button} from "../Button/Button";

export const JournalForm = ({addNewTask}) => {
    const [inputValue, setInputValue] = useState('')

    const addJournalForm = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const formProps = Object.fromEntries(formData)
        addNewTask(formProps)
    }

    return (
        <>
            <form className='journal-form' onSubmit={addJournalForm}>
                <input type="text" name='title'/>
                <input type="date" name='date'/>
                <input value={inputValue} type="text" name='tag'/>
                <textarea name="text" id="" cols="30" rows="10"></textarea>
                <Button text='Сохранить' />
            </form>
        </>
    );
};