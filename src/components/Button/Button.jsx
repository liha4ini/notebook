import './Button.css'

export const Button = ({text}) => {
    return (
        <div>
            <button className='button accent'>{text}</button>
        </div>
    );
};

