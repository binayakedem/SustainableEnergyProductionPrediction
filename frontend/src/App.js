import Routings from './Components/Routings'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routings/>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
