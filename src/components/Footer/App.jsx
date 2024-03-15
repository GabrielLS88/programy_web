import React from 'react';
import './App.css';
import Logo from '../../assets/logoSemFundo.png';

function Footer() {
  return (
    <footer>
        <div className="bodyFooter">
          <div className="divFooter">
            <h3 id='tituloFooter'>TELEK COMERCIO E SERVIÇOS LTDA</h3>
            <p id='subtituliFooter'>13.332.837/0001-80</p>
          </div>
          <div className="divFooter">
            <h3 id='tituloFooter'>Telefone para contao:</h3>
            <p id='subtituliFooter'>34 3293-7100</p>
          </div>
          <div className="divFooter">
            <h3 id='tituloFooter'>Localizado em: Pátio Sabiá</h3>
            <p id='subtituliFooter'>Endereço: SHOPPING PÁTIO SABIÁ</p>
            <p id='subtituliFooter'>Av. Anselmo Alves dos Santos 1111</p>
            <p id='subtituliFooter'>4° PISO SALA 05 - Tibery, Uberlândia - MG, 38405-167</p>
          </div>
          <div className="divFooter">
            <p id='subtituliFooter'>Uberlândia-MG</p>
            <p id='subtituliFooter'>CEP: 38.408-380</p>
          </div>
        </div>
    </footer>
  );
}

export default Footer;
