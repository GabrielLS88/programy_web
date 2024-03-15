import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import PrimeiraImagem from '../../assets/bg_header.jpg';
import SegundaImagem from '../../assets/bg_header2.jpg';
import TerceiraImagem from '../../assets/bg_header3.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function Carrosel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="tamanhoCarrosel">
      <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src={PrimeiraImagem} alt="First slide" className="carousel-image" />
        <Carousel.Caption>
          <h3>Soluções personalizadas e integradas para o seu negócio</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={SegundaImagem} alt="Second slide" className="carousel-image" />
        <Carousel.Caption>
          <h3>Suporte completo para o sucesso de suas operações</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={TerceiraImagem} alt="Third slide" className="carousel-image" />
        <Carousel.Caption>
          <h3>Análises em tempo real e sistema dinâmico</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Carrosel;
