import {Titulo as TituloEstilo} from './styles'

export type Props = {
  children: string
  fontSize?: number
}

const Titulo = (props: Props) => {
  return <TituloEstilo>{props.children}</TituloEstilo>
}

export default Titulo
