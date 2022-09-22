import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section id='topo'>
          <div id='divTopo'>
            <p id='siteName'>Design de Interiores - IFAL</p>
            <p id='nameUser'>NOME</p>
            <button id='imgUser'></button>
            <button id='menu'></button>
          </div>
        </section>
        <section id='barButtons'>
          <div id='bar'>
           <p id='text'>ORDENAR por</p>
           <select id='buttonOptions'>
             <option value={'TIPO'} selected>Tipo</option>
             <option value={'UF'}>UF</option>
             <option value={"MUN"}>MUN</option>
             <option value={'CNAE'}>CNAE</option>
             <option value={'Selecionar Todos'}>Selecionar Todos</option>
           </select>
           <p id='textMap'>MAPA</p>
           <label class="switch">
              <input type="checkbox"></input>
              <span class="slider round"></span>
            </label>
          </div>
        </section>
      </header>
    </div>
  );
}

export default App;
