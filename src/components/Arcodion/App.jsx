import React from 'react';
import './App.css';

function Arcodion() {
  return (
    <div className='bodyArcodion'>
        <div className="localMap">
            <iframe id='iframGoogle' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15098.003725048942!2d-48.2489656!3d-18.9092089!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a44513db13e7c9%3A0x50868fa6fca3b539!2sTELEK!5e0!3m2!1spt-BR!2sbr!4v1710530066065!5m2!1spt-BR!2sbr" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  );
}

export default Arcodion;
