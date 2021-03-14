import React from 'react';
import { ReactComponent as LogoSantander } from '../../assets/icon/santander.svg';
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="santander">
        <LogoSantander />
      </div>
      <small>© Webmotors S.A. Todos os direitos reservados.</small>
    </footer>
  );
};

export default Footer;
