import Button from '../Button/Button'
import './Card.css'

export default function Card({
    imagem, 
    imagemDescription, 
    description, 
    nomeProduto,
    precoAntigo,
    precoNovo,
    numeroParcelas,
    valorParcela,
    altura,
    largura, 
    color
}){
    return(
        <div className='card' style={{width: `${largura}`, height: `${altura}`, color: `${color}`}}>
            <img src={imagem} alt={imagemDescription} />
            <div>
                <h4>{nomeProduto}</h4>
                <p>{description}</p>
                <p>De: R${precoAntigo.toFixed(2).replace(".", ",")}</p>
                <h3>Por: R${precoNovo.toFixed(2).replace(".", ",")}</h3>
                <p>ou {numeroParcelas}X de R${valorParcela.toFixed(2).replace(".", ",")}</p>
                <Button texto={'Comprar'} classe={"button-card"} borda={"#888888 solid 1px"} />
            </div>
        </div>
    )
}