import './App.css';
import Header from '../../components/Header/App';
import Footer from '../../components/Footer/App';
import Accordion from '../../components/Arcodion/App'; // Corrigido para 'Accordion'

function Contato() {

  return (
    <div className='bodyContato'>
      <Header />
      <div className="divPrincipal">
        <h1 className='tituloPagina'>Fale Conosco</h1>
        <div className="espacoContato">
          <h3 id='textoLikWhats'>Contato via WhatsApp:</h3>
          <a href="https://wa.me/3432937100">https://wa.me/3432937100</a>
        </div>
        <div className="espacoContato">
          <h3 id='textoLikWhats'>Deseja nos solicitar um orçamento, clique no botão ao lado:</h3>
          <button className='buttonEmail'><a id='linkDentroDoBTN' href="mailto:email@provedor.com.br">Enviar e-mail</a></button>
        </div>
        <Accordion />
      </div>
      <Footer />
    </div>
  )
}

export default Contato;
