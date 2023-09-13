import './CardButton.css'

export const CardButton = ({children, className}) => {
    const cn = 'card-button' + (className ? ' ' + className : '')

    return (
        <div>
            <button className={cn}>
                {children}
            </button>
        </div>
    );
};