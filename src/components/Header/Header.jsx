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
                <div>
                    <Button texto="Conheça a Linx" borda={"none"} classe={"header-button"} />
                    <Button texto="Ajude o algorítimo" borda={"none"} classe={"header-button"} />
                </div>
                <div>
                    <Button texto="Seus produtos" borda={"none"} classe={"header-button"} />
                    <Button texto="Compartilhe" borda={"none"} classe={"header-button"} />
                </div>
            </div>
            <img src={ triangule } alt="" />
        </header>
    )
}