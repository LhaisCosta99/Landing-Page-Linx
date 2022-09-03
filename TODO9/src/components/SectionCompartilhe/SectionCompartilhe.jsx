import FormIndica from '../FormIndica/FormIndica'
import TituloSection from '../Titulo-Section/TituloSection'
import './SectionCompartilhe.css'

export default function SectionCompartilhe(){
    return (
        <div className='Section-Compartilhe'>
            <TituloSection texto={'Compartilhe a novidade'} />
            <FormIndica />
        </div>
    )
}