import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`
export const Label = styled.label`
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: 500;
  color: #555;
`
export const Input = styled.input`
  border: 1px solid #aaaaaa;
  border-radius: 8px;
  background-color: #fff;
  height: 36px;
  padding: 0 10px;
`

export const Botao = styled.button`
  margin-top: 2.5rem;
  border: none;
  background-color: #6c63ff;
  padding: 0.62rem;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px;

  &:hover {
    background-color: #6b63fff1;
  }

  a {
    font-weight: bold;
    font-size: 12px;
  }
`
