import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario";
import { useState } from 'react'
import Time from "./componentes/Time";
import Rodape from "./componentes/Rodape";

function App () {

  const objetoTimes = [
    {
      nome:'Programação',
      corPrincipal:'#57C278',
      corFundo:'#D9F7E9'
    },
    {
      nome:'Front End',
      corPrincipal:'#82CFFA',
      corFundo:'#E8F8FF'
    },
    {
      nome:'Data Sciense',
      corPrincipal:'#A6D157',
      corFundo:'#F0F8E2'
    },
    {
      nome:'Devops',
      corPrincipal:'#E06B69',
      corFundo:'#FDE7E8'
    },
    {
      nome:'UX e Design',
      corPrincipal:'#DB6EBF',
      corFundo:'#FAE9F5'
    },
    {
      nome:'Mobile',
      corPrincipal:'#FFBA05',
      corFundo:'#FFF5D9'
    },
    {
      nome:'Inovação e Gestão',
      corPrincipal:'#FF8A29',
      corFundo:'#FFEEDF'
    }
  ]

  const [colaboradores, setColaboradores] = useState ([])


   const aoNovoColaboradorAdicionado = (colaborador) => {
    //console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
   }

  return (
    <div className='App'>
       <Banner />
       <Formulario nomeDosTimes={objetoTimes.map(times => times.nome)}
        aoColaboradorCadastrado = {colaborador => aoNovoColaboradorAdicionado(colaborador)}/>

     {objetoTimes.map(timedoObjeto => <Time
      key={timedoObjeto.nome} 
      nome={timedoObjeto.nome} 
      corFundo={timedoObjeto.corFundo}
      corPrincipal={timedoObjeto.corPrincipal}
      colaboradores={colaboradores.filter(colaborador => colaborador.time === timedoObjeto.nome )}
      />)}

      <Rodape />
      
    </div>
  )
}

export default App;