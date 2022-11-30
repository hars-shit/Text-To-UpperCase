import './App.css';
import Nav from './components/Nav';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
  <Nav title="Harshit" home="Ghar"/>   
  <div className='container'>
<TextForm label="Enter the text to analyze"/>
    </div>         
        </>
  );
}

export default App;
