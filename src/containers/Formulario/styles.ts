import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding: 30px;
  border-radius: 10px;
  background-color: #2e2d4e;
  max-width: 50%;
  width: 400px;
  margin-bottom: 20px;
`
export const Botao = styled.button`
  border-radius: 30px;
  background-color: rgb(97, 94, 221);
  height: 40px;
  border: none;
  font-weight: bold;
  cursor: pointer;
  color: #fff;
  font-size: 14px;

  &:hover {
    opacity: 0.8;
  }
`

export const Input = styled.input`
  border: 1px solid #48456c;
  border-radius: 30px;
  height: 40px;
  background-color: 363653;
`
