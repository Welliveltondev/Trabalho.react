import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo"
import Titulo from "../../components/Titulo"

import { Descricao, BotaoTema, SidedarContainer} from './style'

type Props = {
  trocaTema: () => void;
}

const Sidbar = (props: Props) => (
  <SidedarContainer>
    <aside>
    <Avatar />
    <Titulo fontSize={20}>Wellivelton</Titulo>
    <Paragrafo fontSize={16} tipo="secundario">Wellivelton Fonseca</Paragrafo>
    <Descricao tipo="principal" fontSize={12}>Desenvolvedor Fullstack</Descricao>
    <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </aside>
  </SidedarContainer>
)

export default Sidbar
