
import Sidbar from './container/Sidbar'
import Sobre from './container/Sobre'
import EstiloGlobal, { Container } from './styles'
import Projetos from './container/Projetos'

function App() {
  return (
    <>
    <EstiloGlobal/>
    <Container>
    <Sidbar/>
    <main>
      <Sobre />
      <Projetos />
    </main>
    </Container>
    </>
  )
}

export default App
