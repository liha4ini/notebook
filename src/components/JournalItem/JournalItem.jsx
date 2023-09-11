import './JournalItem.css'

export const JournalItem = ({data}) => {

    const formatedDate = new Intl.DateTimeFormat('ru-RU').format(data[0].date)

    return (
        <div className='journal-item'>
            <h2 className='journal-item__header'>{}</h2>
            <h2 className='journal-item__body'>
                <div className='journal-item__date'>{formatedDate}</div>
                <div className='journal-item__text'>3</div>
            </h2>
        </div>
    );
};