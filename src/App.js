
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import {Routes, Route} from 'react-router';
import Header from './components/Shared/Header/Header';
import MainPage from './components/MainPage/MainPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route  path ="/" exact element = {<MainPage />}  /> 
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
