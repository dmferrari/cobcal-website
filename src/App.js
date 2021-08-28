import logo from './logo.svg';
import flag from './flag.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>CobCal 2</h1>
        <p>Calculadora de Cobertura Vegetal</p>
        <p><a href="https://www.youtube.com/watch?v=Vfa1rEKGTok" target="_blank" rel="noreferrer" className="App-link">Instrucciones de uso</a></p>
        <a
          className="button"
          href="https://drive.google.com/file/d/0Bw2EzksvLIaAb0VHUVlGN04tZW8/view?usp=sharing&resourcekey=0-eRqC14tCNjXO0fW2r-ev4g"
          target="_blank"
          rel="noopener noreferrer"
        >
          Descargar
          <span className="version-detail">Versión 2.0.68</span>
        </a>
      </header>
      <div></div>
      <footer><p>&copy;2008-{new Date().getFullYear()} <a href="mailto:cobcal@gmail.com">Mart&iacute;n Ferrari</a></p>
        <p>Todos los derechos reservados</p>
        <img src={flag} className="flag" alt="Hecho en Argentina" title="Hecho en Argentina" />
      </footer>
    </div>
  );
}

export default App;
