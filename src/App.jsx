
import './App.css';
import {Routes , Route} from 'react-router-dom';
import BasicUserCard from './components/BasicUserCard';
import DetailsUserCard from './components/DetailsUserCard';
//import Search from './components/Search';

function App() {
  
  return (
    <div className="App">
      
      
      <Routes>
        
        <Route path="/" element={
        // <div className='card'>
        <BasicUserCard/>
        //</div> 
        }></Route>
      
        <Route path="/contact/:id" element={
        <div className='app2'>
          <DetailsUserCard/>
        </div>  
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
