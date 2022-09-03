import './Header.css'
import Button from '../Button/Button'
import triangule from '../../assets/triangule.png'

export default function Header(){
    return(
        <header>
            <h3>uma seleção de produtos</h3>
            <h1>especial para você</h1>
            <p>todos os produtos desta lista foram selecionadas a partir da sua navegação. Aproveite!</p>
            <div>
                <Button texto="Conheça a Linx" borda={"none"}/>
                <Button texto="Ajude o algorítimo" borda={"none"}/>
                <Button texto="Seus produtos" borda={"none"}/>
                <Button texto="Compartilhe" borda={"none"}/>
            </div>
            <img src={ triangule } alt="" />
        </header>
    )
}