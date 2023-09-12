import './CardButton.css'

export const CardButton = ({children}) => {
    return (
        <div>
            <button className='card-button'>{children}</button>
        </div>
    );
};