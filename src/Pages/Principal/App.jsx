import './App.css'
import Header from '../../components/Header/App'
import Carrosel from '../../components/Carrosel/App'
import Cards from '../../components/Cards/App'
import Footer from '../../components/Footer/App'

function Principal() {

  return (
    <div className='body'>
      <Header />
      <div className="corpo">
        <div className="positionCarrosel">
          <Carrosel />
        </div>
        <div className="postoHistoria">
          <h3>Com mais de 10 anos de experiência a Telek Sistemas é especializada em soluções de atendimento integradas para empresas, oferecendo desenvolvimento, suporte e implantação de soluções como chatbots inteligentes e integrados, URAs com integrações, discadores ativos e receptivos e BI para coleta e análise de dados de atendimento.</h3>
        </div>
        <div className="positonCards">
          <Cards />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}

export default Principal
