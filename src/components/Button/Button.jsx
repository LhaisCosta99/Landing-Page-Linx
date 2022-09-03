import './Button.css'

export default function Button({texto, borda, classe, click, link, target, id}){
    return (
        <button id={id} style={{border: `${borda}`}} className={classe} onClick={click}><a href={link} target={target} >{texto}</a></button>
    )
}