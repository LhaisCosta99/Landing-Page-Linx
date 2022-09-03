import './Button.css'

export default function Button({texto, borda, classe, click}){
    return (
        <button style={{border: `${borda}`}} className={classe} onClick={click}>{texto}</button>
    )
}