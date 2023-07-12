import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import About from './components/About';

function App() {
  return (
    <>
    <Navbar title="Hello"/>
    <div className="container mb-3">
    <Form heading = "enter text"/>
    {/* <About/> */}
    </div>
    
    </>  );
}

export default App;
