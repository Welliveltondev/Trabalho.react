import { ThemeProvider} from 'styled-components'

import Sidbar from './container/Sidbar'
import Sobre from './container/Sobre'
import EstiloGlobal, { Container } from './styles'
import Projetos from './container/Projetos'
import temaLight from './Themes/light'
import temaDark from './Themes/dark'
import { useState } from 'react'

function App() {
  const [estaUsandoTemadark, setEstaUsandoTemaDark] = useState(false)

  function trocaTema() {
    setEstaUsandoTemaDark(!estaUsandoTemadark)
  }

  return (
    <ThemeProvider theme={estaUsandoTemadark ? temaDark : temaLight}>
    <EstiloGlobal/>
    <Container>
    <Sidbar trocaTema={trocaTema}/>
    <main>
      <Sobre />
      <Projetos />
    </main>
    </Container>
    </ThemeProvider>
  )
}

export default App
