import {JournalItem} from "./components/JournalItem/JournalItem";
import {Button} from "./components/Button/Button.jsx";
import {CardButton} from "./components/CardButton/CardButton";

import './App.css'
import {LeftSide} from "./layouts/LeftSide/LeftSide";
import {Header} from "./components/Header/Header";
import {JournalList} from "./components/JournalList/JournalList";
import {MainContent} from "./layouts/MainContent/MainContent";
import {AddButton} from "./components/AddButton/AddButton";


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
            <LeftSide>
                <Header/>
                <AddButton/>
                <JournalList>
                    <CardButton>
                        <JournalItem
                            title={data[0].title}
                            text={data[0].text}
                            date={data[0].date}
                        />
                    </CardButton>
                    <CardButton>
                        <JournalItem
                            title={data[1].title}
                            text={data[1].text}
                            date={data[1].date}
                        />
                    </CardButton>
                </JournalList>
            </LeftSide>
            <MainContent>
                Main
            </MainContent>
        </div>
    )
}

export default App
