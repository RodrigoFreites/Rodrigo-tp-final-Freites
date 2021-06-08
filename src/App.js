import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemlistContainer from './components/ItemListContainer';


function App() {
  return (
    <div className="App">
      {<NavBar/>}
      {<ItemlistContainer greeting='Hola Mundo'/>}
    </div>
  );
}

export default App;