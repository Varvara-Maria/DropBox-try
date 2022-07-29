
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import {Routes, Route} from 'react-router';
import Header from './components/Shared/Header/Header';
import MainPage from './components/MainPage/MainPage';
import Footer from './components/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route  path ="/" exact element = {<MainPage />}  /> 
        </Routes> 
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
