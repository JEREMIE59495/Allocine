
import './App.css';
import Detail from './pages/Detail';
import Favoris from './pages/Favoris';
import{ BrowserRouter ,Route, Routes } from 'react-router-dom'
import Accueil from './pages/Accueil';
import Header from './components/Header';
function App() {
 
  return (

       <div className="App">
  
        <BrowserRouter> 
            <Header/>
            <Routes>
                <Route path="/" element={<Accueil/>} /> 
            
                <Route path='/detail' element={<Detail />}/>
           
                <Route path='/favoris' element={<Favoris />}/>
            </Routes>
        </BrowserRouter>
        
    </div>
   
 
  );
}

export default App;
