import Button from '../Button/Button'
import './SectionAlgoritimo.css'

export default function SectionAlgoritimo(){
    return (
        <section className='algoritimo'>
            <div>
                <h4>Ajude o algorítimo a ser mais certeiro</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Pellentesque ultricies tellus nec mi porta convallis sollicitudin eu urna. 
                    Mauris rhoncus erat sed interdum dignissim. 
                    Suspendisse semper pretium consectetur. 
                    Praesent bibendum arcu risus, sit amet iaculis ex tempus quis. 
                    Cras et erat ut tellus vulputate tincidunt. 
                    Aenean lacinia euismod augue vel egestas. 
                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                    per inceptos himenaeos. Vestibulum vel urna tortor. 
                    Vivamus et arcu non felis tristique eleifend. 
                    <br />
                    <br />
                    Morbi eu condimentum urna. 
                    Curabitur eu magna eget turpis condimentum ultrices. 
                    Suspendisse quis lorem ultricies, pulvinar purus sed, 
                    egestas erat. Etiam ultricies a ante vehicula pharetra. 
                    Quisque ut neque mattis, consequat velit ut, ultrices orci. 
                    Nulla varius elementum erat vel pharetra. Aenean sit amet nisi diam. 
                    Morbi viverra, magna ac luctus commodo, odio ante suscipit libero, 
                    at mattis augue est vel metus.
                    </p>
            </div>
            <div className='formulario-algoritimo'>
                <p>Seu nome:</p>
                <input type="text" />
                <p>E-mail</p>
                <input type="text" />
                <p>CPF:</p>
                <input type="text" /> 

                <div>
                    <input type="radio" name="sexo" id="masculino" />
                    <label htmlFor="masculino">masculino</label>
                    <input type="radio" name="sexo" id="feminino" />
                    <label htmlFor="feminino">feminino</label> 
                </div>

                <Button texto={'Enviar'} borda={"#888888 solid 1px"} classe={"button-algoritimo"} />
            </div>
        </section>
    )
}