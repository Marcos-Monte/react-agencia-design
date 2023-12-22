// Importando componentes da pagina
import Rodape from './Componentes/Rodape';
import SecaoBanner from './Componentes/SecaoBanner';
import SecaoExperiencia from './Componentes/SecaoExperiencia';
import Topo from './Componentes/Topo';

import './App.css';

function App() {
  return (
    <div className="App">
      <Topo />
      <SecaoBanner />
      <SecaoExperiencia />
      <Rodape />
    </div>
  );
}

export default App;
