import { useSelector } from 'react-redux'

import Tarefa from '../../components/Tarefa'
import { RootReducer } from '../../store'
import { Container } from '../../styles'
import { H1 } from '../Formulario/styles'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  return (
    <Container>
      <H1>Formulario</H1>
      <ul>
        {itens.map((t) => (
          <li key={t.id}>
            <Tarefa
              nome={t.nome}
              contato={t.contato}
              email={t.email}
              id={t.id}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeTarefas
