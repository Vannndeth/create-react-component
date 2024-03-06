
import './App.css'
import Navbar from './components/NavbarComponent'
import FooterComponent from './components/FooterComponet'
import ProductComponent from './components/ProductComponent';
import MainComponent from './components/MainComponent';


function App() {
  return (
    <div className='flex flex-col h-screen justify-between'>
      <Navbar/>
      <MainComponent/>
      <FooterComponent/> 
    </div>
  );
}

export default App
