import styled from 'styled-components';

const FormSubscription = styled.form`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const InputWrapper = styled.div`
    position: relative;
    
`
const LabelEmail = styled.label`
   

`

const ImgEmail = styled.img`
    position: absolute;
    top: 50%;
    left: 14px;
    transform: translateY(-50%);
  
    width: 16px;
    height: 12px;

`
const InputEmail = styled.input`
    box-sizing: border-box;
    width: 204px;

    padding-top: 10px;
    padding-right: auto;
    padding-bottom: 10px;
    padding-left: auto;

    border: 1px solid #FAFAFA;
    border-color: rgba(250,250,250, 0.25);
    border-radius: 6px;

    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 1.5;
    letter-spacing: -0.02em;

    color: #FAFAFA;
    background-color: transparent;
    
`

const ButtonStyled = styled.button`
    margin-top: 8px;
    width: 204px;
    padding: 11px 71px;

    background: #8BAA36;
    border-radius: 6px;
`
export {FormSubscription, LabelEmail, InputWrapper, ImgEmail, InputEmail, ButtonStyled }