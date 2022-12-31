
import './App.css';

function App() {
  const google = () => {
    window.open("http://localhost:5000/auth/google/callback", "_self");
  };
  return (
    <div className="App">
      <h1>
        Login
      </h1>
      <button onClick={google}>google</button>
    </div>
  );
}

export default App;
