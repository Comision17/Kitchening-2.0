import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import './styles/estilos.css'

function App() {

  
  const handleClick = () => document.documentElement.scrollTop = 0


  return (
    <div className="home">
      <Header />
      <Main />
      <Footer>
        <div className="goTop" id="goTop" onClick={handleClick}>
          <i className="fas fa-arrow-circle-up"></i>
        </div>
      </Footer>
    </div>
  );
}

export default App;
