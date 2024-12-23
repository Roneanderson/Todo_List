import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

import { Form, Botao, Input, Label, H1 } from './styles'
import Tarefa from '../../models/Tarefas'
import { cadastrar } from '../../store/redurcers/tarefas'
import { useNavigate } from 'react-router-dom'

const Formulário = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [contato, setContato] = useState('')

  const cadastrarTarefa = (evento: FormEvent) => {
    evento.preventDefault()
    const tarefaParaAdicionar = new Tarefa(nome, email, contato, 5)
    dispatch(cadastrar(tarefaParaAdicionar))
    navigate('/')
  }
  return (
    <div>
      <Form onSubmit={cadastrarTarefa}>
        <H1>Formulário de Cadastro</H1>
        <Label htmlFor="nome">Nome</Label>
        <Input
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          id="nome"
          name="nome"
          type="text"
        />

        <Label htmlFor="email">email</Label>
        <Input
          onChange={(evento) => setEmail(evento.target.value)}
          id="email"
          name="email"
          value={email}
          type="email"
        />

        <Label htmlFor="contato">Contato</Label>
        <Input
          onChange={(evento) => setContato(evento.target.value)}
          id="contato"
          name="contato"
          value={contato}
          type="number"
        />
        <div>
          <Botao type="submit">
            <a>Cadastrar</a>
          </Botao>
          <Botao type="button" onClick={() => navigate('/')}>
            <a>Voltar a pagina anterior</a>
          </Botao>
        </div>
      </Form>
    </div>
  )
}

export default Formulário
