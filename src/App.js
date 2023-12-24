// Importanto 'useState'
import { useState } from 'react';

// Importando componentes da pagina
import Rodape from './Componentes/Rodape';
import SecaoBanner from './Componentes/SecaoBanner';
import SecaoExperiencia from './Componentes/SecaoExperiencia';
import Topo from './Componentes/Topo';

// Importando arquivo de estilização
import './App.css';

function App() {

  // Criando valores de 'estilos'
  const claro = 'light';
  const escuto = 'dark';

  // Criando variaveis de 'estado' para usar 'useState'
  const [estilo, setEstilo] = useState(false);

  // Função de alteração de 'estado' da variavel
  function alterarEstilo() {

    // Se trocar o 'estado' da variavel de: false --> True (vice versa)
    setEstilo(!estilo);
  }

  return (

    // Elemento pai vai receber estilização baseado nos estilos atribuibos a váriavel de estado
    // Exemplo: false = light mode ; true = dark mode
    <div className={`App ${estilo ? escuto : claro}`}>

      {/* Componente 'Topo' recebe propriedades via props - para troca de imagem de botão e estilo (light / dark) - Função de alteração de estilo é iniciada pelo click do usuário (botão no componente Topo) */}
      <Topo
        imagemBotao={estilo}
        alterarEstilo={alterarEstilo}
      />

      <SecaoBanner />

      <SecaoExperiencia />

      <Rodape />

    </div>
  );
}

export default App;
