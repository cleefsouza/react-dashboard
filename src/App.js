import React from 'react';
import './App.css';
import MenuSuperior from './components/menu-superior/MenuSuperior';
import Resumo from './components/resumo/Resumo';
import Consultas from './components/consultas/Consultas';
import Faturamento from './components/faturamento/Faturamento';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <MenuSuperior />
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <Switch>
              <Route path="/consultas" component={Consultas} />
              <Route path="/faturamento" component={Faturamento} />
              <Route path="/" exact component={Resumo} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
