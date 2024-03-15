import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import IconBlip from '../../assets/icone_blip.png'
import IconSolucao from '../../assets/icone_kontac2.png'
import IconDev from '../../assets/icone_issabel.png'
import IconBi from '../../assets/icone_biAi.png'

function GridExample() {
  const titles = [
    'Chatbot | Take Blip',
    'Soluções em Atendimentos',
    'Desenvolvimento de Sistemas',
    'BI - Bussiness Inteligence | AI - Inteligência Artificial'
  ];

  const subtitles = [
    'A Telek é representante oficial da plataforma e especialista no desenvolvimento de fluxos e integrações na plataforma. Automatize conversas com clientes, crie experiências personalizadas usando Inteligência Artificial e aumente seus resultados com a plataforma mais moderna e completa de chatBot a plataforma Take Blip de contatos inteligentes. Centralize todos os canais de atendimento em uma só solução:',
    'A Telek é especialista na implementação e desenvolvimento de soluções de atendimento e telecomunicações, entre elas:',
    'A Telek possui equipe capacitada para o desenvolvimento dos mais diversos tipos de sistemas e soluções :',
    'A Telek possui ampla experiência na implementação e desenvolvimento de soluções de coleta, processamento e análise de dados para atendimento, bem como o uso de Inteligência Artificial para atendimento e processamento de dados e solicitações.'
  ];

  const texts = [
    'WhatsApp, Instagram, Facebook, Telegram, Workplace chat, E-mail, chat web, Google Bussinesss Chat, Apple Message e SMS.',
    'Discadores automáticos, URA’s de atendimento automático com integrações, Reconhecimento de Fala, TTS - Texto para Voz, PABX IP, Gateways SIP, VOIP, Integrações de Voz, dados e canais digitais',
    'Web, Client server, Banco de dados em várias linguagens como PHP, Java Script, Node JS, C++ e etc.',
  ];

  const imageUrls = [
    IconBlip,
    IconSolucao,
    IconDev,
    IconBi
  ];

  return (
    <Row xs={1} md={2} className="g-4">
      {imageUrls.map((url, idx) => (
        <Col key={idx}>
          <Card style={{background:"#092136c9"}}>
            <Card.Img variant="top" src={url} style={{ width: '10rem', height: 'auto', color: "white", margin: "0.8rem 2rem 0rem"}} />
            <Card.Body>
              <Card.Title style={{color:"#38B6FF", fontSize: "1.5rem"}}>{titles[idx]}</Card.Title>
              <Card.Subtitle style={{color:"white",margin: "0.9rem 0rem", fontSize: "0.9rem"}}>{subtitles[idx]}</Card.Subtitle>
              <Card.Text style={{color:"#ffa43a", fontSize: "0.9rem"}}>{texts[idx]}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default GridExample;
