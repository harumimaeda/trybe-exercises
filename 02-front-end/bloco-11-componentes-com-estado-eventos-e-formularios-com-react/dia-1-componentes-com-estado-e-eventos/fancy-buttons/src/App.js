function handleClick() {
  console.log('Clicou no botão 1!');
}

function handleClick2() {
  console.log('Clicou no botão 2!');
}

function handleClick3() {
  console.log('Clicou no botão 3!');
}

function App() {
  return (
    <div className="App">
      <button onClick={handleClick}>Botão 1</button>
      <button onClick={handleClick2}>Botão 2</button>
      <button onClick={handleClick3}>Botão 3</button>
    </div>
  );
}

export default App;
