import './rodape.css'

const Rodape = () => {
    return (
        <section className='rodape'>
         <div className='redes-sociais'>
            <img src='/imagens/fb.png' alt='logo do Facebook' />
            <img src='/imagens/tw.png' alt='logo do Twitter' />
            <img src='/imagens/ig.png' alt='logo do Instagran' />
         </div>
         <div className='logo'>
            <img src='/imagens/logo.png' alt='logo da Alura' />
            <p> Desenvolvido por Alura.</p>
         </div>
        
        </section>
    )
}

export default Rodape