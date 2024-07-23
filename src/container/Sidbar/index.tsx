import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo"
import Titulo from "../../components/Titulo"

import { Descricao, BotaoTema, SidedarContainer} from './style'

const Sidbar = () => (
  <SidedarContainer>
    <aside>
    <Avatar />
    <Titulo fontSize={20}>Wellivelton</Titulo>
    <Paragrafo fontSize={16} tipo="secundario">Wellivelton Fonseca</Paragrafo>
    <Descricao tipo="principal" fontSize={12}>Desenvolvedor Fullstack</Descricao>
    <BotaoTema>Trocar tema</BotaoTema>
    </aside>
  </SidedarContainer>
)

export default Sidbar
