import './App.css'
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="app-layout">     
      <header>
        <div id="logo">
          <h2>Match-API Frontend Using React</h2>
        </div>
        <nav>
          <a href="#">Table View</a>
          <a href="#">Panel View</a>
        </nav>
      </header>

      <main>
        <Dashboard />
      </main>

      <footer>
        <span>Dimitrios Tsakiridis ©, 2025</span>
      </footer>      
    </div>
  );
}


export default App;
