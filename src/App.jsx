import {JournalItem} from "./components/JournalItem/JournalItem";
import {Button} from "./components/Button/Button.jsx";

import './App.css'


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

    return (
        <div className='app'>
            <JournalItem data={data} />
        </div>
    )
}

export default App
