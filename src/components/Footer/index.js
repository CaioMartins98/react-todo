import React from 'react';
import styled from 'styled-components';
import GitHubIcon from '../../assets/github.svg';

export const Container = styled.div`
   background: #9432A4;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 0px;
  width: 100%;
  
  & > p{
    font-family: 'Roboto';
    color: white;
    font-weight: 500;
    font-size: 24px;
  }

  & > a{
    margin-top: 20px;
  }

  @media (max-width: 800px){
    & > p {
      font-size: 18px;
    }
  }
`;

const Footer = () =>{
  return (
    <Container>
    <p>Desenvolvido por Caio Martins</p>
    <a href="https://github.com/CaioMartins98" 
    target="_blank"
    rel="noreferrer"
    >
      <img src={GitHubIcon} 
      alt="GitHub icon"/>
    </a>
    </Container>
  )
}

export default Footer;
