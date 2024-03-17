import './lista.css'

const ListaSuspensa = (props) => {

   return (
    <div className="lista-suspensa">
        <label>{props.label}</label>
        <select onChange={evento => props.aoSelecionado(evento.target.value)}
        required={props.obrigatorio} value={props.valor}>
         <option value=''>Selecione</option>
           {props.itens.map(itemArray => { // .map metoto do react para percorrer o Array e devolver uma nova lista modificada do Array
             return <option key={itemArray}>{itemArray}</option> // key usado depois do map é chave unica do item do array
             })}
        </select>
    </div>
   )
}



export default ListaSuspensa