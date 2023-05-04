import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';
import imgBGModal from '../../../images/img-header/mountains.png'
export const DivFormStyled = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: grey;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 5;
    background: rgba(250, 250, 250, 0.4);
`
export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 70px 30px;
  border: 1px solid #8baa36;
  border-radius: 18px;
  width: 330px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 24px;
  background: url(${imgBGModal}) no-repeat;
  background-position: center;
  background-size: cover;
  overflow: hidden;

`;
export const WrapperButtons = styled.div`
  display: flex;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: space-between;
  align-items: center;
  gap: 1px;
  margin-bottom: 20px;
`

export const ButtonSingUpIn = styled.button`
  display: inline-block;
  width: calc(100% / 2 - 1px);
  text-align: center;
  padding-top: 15px;
  padding-bottom: 15px;
  cursor: pointer;
  font-size: 14px;
  background-color: rgba(215, 120, 31, 0.5);

  border: transparent;
  color: #ffffff;
`

export const Input = styled(Field)`
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 15px;
  background-color: rgba(143, 139, 131, 0.3);
  border: 1px solid rgba(143, 139, 131, 0.7);
  border-radius: 5px;

&:focus {
  background-color: rgba(143, 139, 131, 0.7);
  border: 1px solid rgba(143, 139, 131, 0.5);
  outline: none;
}
&:hover {
  background-color: rgba(143, 139, 131, 0.5);
  border: 1px solid rgba(143, 139, 131, 0.5);
  outline: none;
}
`
export const ButtonSubmit = styled.button`
  display: inline-block;
  width: 100px;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  cursor: pointer;
  font-size: 14px;
  background-color: orange;
  border-radius: 10px;
  border: transparent;
  color: #ffffff;
`