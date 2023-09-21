import {JournalItem} from "./components/JournalItem/JournalItem";
import {CardButton} from "./components/CardButton/CardButton";
import {LeftSide} from "./layouts/LeftSide/LeftSide";
import {Header} from "./components/Header/Header";
import {JournalList} from "./components/JournalList/JournalList";
import {MainContent} from "./layouts/MainContent/MainContent";
import {AddButton} from "./components/AddButton/AddButton";
import {JournalForm} from "./components/JournalForm/JournalForm";

import './App.css'

import {useEffect, useState} from "react";



function App() {
    const [dataArr, setDataArr] = useState([])

    // const data = [
    //     {
    //         id: 1,
    //         title: 'Ну привет!',
    //         text: 'Здесь можно писать всякое разное пока не надоест.',
    //         date: new Date()
    //     },
    //     {
    //         id: 2,
    //         title: 'Ну привет еще раз, скот!!',
    //         text: 'Мне уже надоело но я все еще пишу.',
    //         date: new Date()
    //     }
    // ]

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("date"))
        // console.log(data)
        if (data) {
            setDataArr(data.map(el => ({
                ...el,
                    date: new Date(el.date)
            })))
        }
    }, [])



    const addNewTask = (newTask) => {
        setDataArr(prevState => [...prevState, {
            text: newTask.text,
            title: newTask.title,
            date: new Date(newTask.date),
            id: Math.max(...prevState.map(i => i.id)) + 1
            // id: prevState.length > 0 ? Math.max(...prevState.map(i => i.id)) + 1 : 1
        }])
    }

    const sortData = (a, b) => a.date > b.date ? 1 : -1

    const elements = dataArr.sort(sortData).map((el) => (
        <CardButton key={el.id}>
            <JournalItem
                title={el.title}
                text={el.text}
                date={el.date}
            />
        </CardButton>
    ))

    return (
        <div className='app'>
            <LeftSide>
                <Header/>
                <AddButton/>
                <JournalList>
                    {dataArr.length === 0 ? <p>Add new post</p> : elements}
                </JournalList>
            </LeftSide>
            <MainContent>
                <JournalForm addNewTask={addNewTask} />
            </MainContent>
        </div>
    )
}

export default App
