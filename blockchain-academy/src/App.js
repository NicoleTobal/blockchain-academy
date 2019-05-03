import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <img className="decoration1" src="/images/background-decoration1.png" />
        <img className="decoration2" src="/images/background-decoration1.png" />
        <img className="decoration3" src="/images/background-decoration2.png" />
        <div className="navbar">
          <div className="logo-container">
            <img src="/images/logo-navbar.png" height="40px" />
          </div>
          <div className="section-links">
            <a> Cursos </a>
            <a> Roadmap </a>
            <a> About </a>
            <a> FAQ </a>
            <img src="/images/menu.png" height="32px" />
          </div>
        </div>
        <div className="line-division" />
        <header className="header">
          <div className="overlay">
            <img className="logo" src="/images/logo-header.png" height="150px" />
            <h1 className="title first-part"> Blockchain</h1>
            <h1 className="title second-part"> <b>Academy</b></h1>
            <h5 className="second-title"> Educando para un futuro descentralizado </h5>
            <button className="header-button"> Quiero aprender de <img src="/images/search.png" height="15px" /></button>
            <div className="line-division" />
          </div>
        </header>
        <div className="roadmap-section">
          <div className="roadmap-header">
            <h2>Roadmap</h2>
          </div>
          <div className="roadmap-row">
            <div className="column">
              <img src="/images/events1.png"/>
              <button> Ver más </button>
            </div>
            <div className="column">
              <img src="/images/events2.png" />
              <button> Ver más </button>
            </div>
            <div className="column">
              <img src="/images/events1.png" />
              <button> Ver más </button>
            </div>
          </div>
        </div>
        <div className="event section">
          <div className="video">
            <img src="/images/events1.png"/>
            <div className="video-title">
              <h2>charla informativa</h2> 
            </div>
          </div>
          <div className="text">
            <h2>Eventos</h2>
            <div className="line-division" />
            <p>
              ¡Convertite en un desarrollador Blockchain, la internet del futuro está en tus manos!
              Este curso, que tiene un mes de duración y está avalado por RSK, Signatura, Protofire
              y Blockchain Academy, te abrirá las puertas de la tecnología que está cambiando la red.
            </p>
            <button> Ver streaming </button>
          </div>
        </div>
        <div className="images section">
          <div className="row">
            <div className="column">
              <img src="/images/image1.png"/>
            </div>
            <div className="column">
              <img src="/images/image2.png" />
            </div>
            <div className="column">
              <img src="/images/image3.png" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
