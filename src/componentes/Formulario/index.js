import './formulario.css'
import CampoTexto from "../CampoTexto";
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

     const aoClicarNoBotao = (evento) => {
          evento.preventDefault() // preventDefault usado para cancelar o evento padrao, obs: Nesse caso era o evento padrao da tag button (recarregar a pagina)
         props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
         })

         // limpa valor das variaveis
         setNome ('')
         setCargo ('')
         setImagem ('')
         setTime ('')
     }
    
    return (                                       // O método OnSubmit é usado quando um formulário é enviado para a sua página de processamento
        <section className="formulario">  
           <form onSubmit={aoClicarNoBotao}> 
            <h2>Preencha os dados para criar o card do colaborador</h2>

                <CampoTexto
                   obrigatorio={true} 
                   label="Nome"
                   placeholder="Digite seu nome"
                   valor={nome}
                   aoAlterado={valor => setNome(valor)}
                   
                 />
                <CampoTexto 
                    obrigatorio={true}
                    label="Cargo"  
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                   
                 />
                <CampoTexto
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                 />
                <ListaSuspensa
                    label='Time'
                    obrigatorio={true} 
                    itens={props.nomeDosTimes}
                    valor={time}
                    aoSelecionado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
           </form>
        </section>
    )
}

export default Formulario
