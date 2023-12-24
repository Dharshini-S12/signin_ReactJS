import logo from './logo.svg';
import './App.css';

function App() {
  const uname="USERNAME:";
  const pword="PASSWORD:";
  const uplace="Enter username";
  const pplace="Enter password"
  return (
    <div className="App">
      <h1 className=" h1">SIGNIN</h1>
      <label> {uname} </label><br></br>
      <input type="text" placeholder= {uplace} ></input><br></br><br></br>

      <label> {pword} </label><br></br>
      <input type="password" placeholder= {pplace} ></input><br></br><br></br>

      <input type="submit" value="SIGNIN" ></input>
    </div>
  );
}

export default App;
