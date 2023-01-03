import './App.css';
function App(props) {
  const topPosition = '40px';
  return (
    <div>
      <header className="App-header" style={{ top: topPosition }}>
        My First React App
        <h3>Hello, {props.name}</h3>
      </header>
    </div>
  );
}
export default App;