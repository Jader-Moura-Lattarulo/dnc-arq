import './Button.css'

function Button ({ arrow, buttonStyle, loading, children, ...props }) {
    return (
        <button className={`button ${buttonStyle}`}>
            {children}           
        </button>
    )
}

export default Button