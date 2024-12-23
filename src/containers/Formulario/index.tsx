import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

import { Container, Form, Botao, Input } from './styles'
import Tarefa from '../../models/Tarefas'
import { cadastrar } from '../../store/redurcers/tarefas'
import { useNavigate } from 'react-router-dom'
import { VoltarPagina } from '../BotaoPagina/styles'

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
    <Container>
      <Form onSubmit={cadastrarTarefa}>
        <h1>Formulário de Cadastro</h1>
        <label htmlFor="nome">Nome</label>
        <Input
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          id="nome"
          name="nome"
          type="text"
        />

        <label htmlFor="email">email</label>
        <Input
          onChange={(evento) => setEmail(evento.target.value)}
          id="email"
          name="email"
          value={email}
          type="email"
        />

        <label htmlFor="contato">Contato</label>
        <Input
          onChange={(evento) => setContato(evento.target.value)}
          id="contato"
          name="contato"
          value={contato}
          type="number"
        />
        <Botao type="submit">Cadastrar</Botao>
        <VoltarPagina>Voltar</VoltarPagina>
      </Form>
    </Container>
  )
}

export default Formulário
