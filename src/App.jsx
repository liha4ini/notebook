import {JournalItem} from "./components/JournalItem/JournalItem";
import {CardButton} from "./components/CardButton/CardButton";
import {LeftSide} from "./layouts/LeftSide/LeftSide";
import {Header} from "./components/Header/Header";
import {JournalList} from "./components/JournalList/JournalList";
import {MainContent} from "./layouts/MainContent/MainContent";
import {AddButton} from "./components/AddButton/AddButton";
import {JournalForm} from "./components/JournalForm/JournalForm";

import './App.css'
import {useState} from "react";



function App() {

    const data = [
        {
            title: 'Ну привет!',
            text: 'Здесь можно писать всякое разное пока не надоест.',
            date: new Date()
        },
        {
            title: 'Ну привет еще раз, скот!!',
            text: 'Мне уже надоело но я все еще пишу.',
            date: new Date()
        }
    ]

    const [dataArr, setDataArr] = useState(data)

    const addNewTask = (newTask) => {
        setDataArr(prevState => [...prevState, {
            text: newTask.text,
            title: newTask.title,
            date: new Date(newTask.date)
        }])
    }

    return (
        <div className='app'>
            <LeftSide>
                <Header/>
                <AddButton/>
                <JournalList>
                    {dataArr.map((el,i) => (
                        <CardButton key={i}>
                            <JournalItem
                                title={el.title}
                                text={el.text}
                                date={el.date}
                            />
                        </CardButton>
                    ))}
                </JournalList>
            </LeftSide>
            <MainContent>
                <JournalForm addNewTask={addNewTask} />
            </MainContent>
        </div>
    )
}

export default App
