import './Button.css'

export default function Button({texto, borda, classe}){
    return (
        <button style={{border: `${borda}`}} className={classe}>{texto}</button>
    )
}