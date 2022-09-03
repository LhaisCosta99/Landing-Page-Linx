import { useEffect } from 'react'
import { useState } from 'react'
import APIService from '../../services/APIService'
import Button from '../Button/Button'
import Card from '../Card/Card'
import TituloSection from '../Titulo-Section/TituloSection'
import './Selection.css'

export default function Selection(){
    const [lista, setLista] = useState([])

    useEffect(() => {
        async function request(){
            const newLista = await APIService()
            setLista(newLista.products)
        }
        request()
    }, [])


    return (
        <div className='Selection'>
            <TituloSection texto={'Sua seleção Especial'} />
            <div className='cards'>
                {lista.map(produto => (
                    <Card 
                        key={produto.id}
                        imagem={produto.image}
                        imagemDescription={produto.name}
                        description={produto.description}
                        nomeProduto={produto.name}
                        precoAntigo={produto.oldPrice}
                        precoNovo={produto.price}
                        numeroParcelas={produto.installments.count}
                        valorParcela={produto.installments.value}
                        color={"#707070"}
                    />
                ))}
            </div>
            <Button texto={"Ainda mais produtos aqui!"} borda={"#888888 solid 1px"} classe={"button-selection"} />
        </div>
    )
}