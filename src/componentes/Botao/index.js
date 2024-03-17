import './botao.css'


const Botao = (props) => {
    return (          // Children=Filhos
        <button className='botao'>
             {props.children}
        </button>
    )

}

export default Botao