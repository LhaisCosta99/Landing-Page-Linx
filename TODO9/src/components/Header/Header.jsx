import './Header.css'
import triangule from '../../assets/triangule.png'
import Button from '../Button/Button'

export default function Header(){
    return(
        <header>
            <h3>uma seleção de produtos</h3>
            <h1>especial para você</h1>
            <p>todos os produtos desta lista foram selecionadas a partir da sua navegação. Aproveite!</p>
            <div>
                <Button texto="Conheça a Linx"/>
                <Button texto="Ajude o algorítimo"/>
                <Button texto="Seus produtos"/>
                <Button texto="Compartilhe"/>
            </div>
            <img src={ triangule } alt="" />
        </header>
    )
}