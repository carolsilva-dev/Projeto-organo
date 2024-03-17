import './colaborador.css'

const Colaborador = ({nome, imagem, cargo, corPrincipal}) => {
    return(
        <div className='colaborador'>
            <div className='cabeçalho' style={{backgroundColor: corPrincipal}}>
                 <img src={imagem} alt={nome} />
            </div>
            <div className='rodapé'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}
//obs acima uma outra forma sem usrar props mas o menso sentido
export default Colaborador