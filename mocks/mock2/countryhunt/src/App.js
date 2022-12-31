
import './App.css';
import DenseAppBar from './components/AppBar';
import Countries from './components/Countries';
import SelectVariants from './components/SortFilter';

function App() {
  return (
    <div className="App">
      <DenseAppBar/>
      <SelectVariants/>
      <Countries/>
    </div>
  );
}

export default App;
