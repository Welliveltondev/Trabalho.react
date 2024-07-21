import Paragrafo from "../../components/Paragrafo";
import { Titulo } from "../../components/Titulo/styles";

import { Card, LinkBotao } from "./styles";

const Trabalho = () => (
  <Card>
    <Titulo>Projeto lista de tarefas</Titulo>
    <Paragrafo tipo="secundario">Projeto com Vue.js</Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
)

export default Trabalho
