import Titulo from "../../components/Titulo"
import Trabalho from "../Trabalho"

import { Lista } from "./styles"

const Projetos = () => (
  <section>
    <Titulo fontSize={16}>Projetos</Titulo>
    <Lista>
      <li>
        <Trabalho/>
      </li>
      <li>
        <Trabalho/>
      </li>
      <li>
        <Trabalho/>
      </li>
      <li>
        <Trabalho/>
      </li>
    </Lista>
  </section>
)

export default Projetos
