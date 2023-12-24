// Importanto 'useState'
import { useState } from 'react';

// Importando componentes da pagina
import Rodape from './Componentes/Rodape';
import SecaoBanner from './Componentes/SecaoBanner';
import SecaoExperiencia from './Componentes/SecaoExperiencia';
import Topo from './Componentes/Topo';

import './App.css';

function App() {

  const claro = 'light';
  const escuto = 'dark';

  const [estilo, setEstilo] = useState(false);

  function alterarEstilo() {
    setEstilo(!estilo);
  }
  return (
    <div className={`App ${estilo ? escuto : claro}`}>

      <Topo
        estilo={estilo}
        alterar={alterarEstilo}
      />

      <SecaoBanner />

      <SecaoExperiencia />

      <Rodape />

    </div>
  );
}

export default App;
