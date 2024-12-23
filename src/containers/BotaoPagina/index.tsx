import { useNavigate } from 'react-router-dom'
import { VoltarPagina } from './styles'

const BotaoPagina = () => {
  const navigate = useNavigate()
  return (
    <>
      <VoltarPagina onClick={() => navigate('/')} />
    </>
  )
}

export default BotaoPagina
