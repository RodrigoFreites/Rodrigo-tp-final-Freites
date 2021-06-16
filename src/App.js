import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemlistContainer from './components/ItemListContainer';
import ItemCount from "./components/ItemCount";
import Items from "./components/Item";


function App() {
  return (
    <div className="App">
      {<NavBar/>}
      {<ItemlistContainer greeting='Hola Mundo'/>}
      <ItemCount/>
      <Items />
    </div>
  );
}

export default App;