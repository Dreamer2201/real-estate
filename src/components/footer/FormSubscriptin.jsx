import React from 'react'
import svgEmail from '../../images/email.png'
import {FormSubscription, LabelEmail, InputWrapper, ImgEmail, InputEmail, ButtonStyled} from './FormSubscriptionStyles'


export default function FormSubscribe() {
  return (
    <FormSubscription>
        <LabelEmail htmlFor=''></LabelEmail>
        <InputWrapper>
            <ImgEmail src={svgEmail} alt="email" />
            <InputEmail id='' type='text' name='email' placeholder='Enter your email address' required/>
        </InputWrapper>
        <ButtonStyled type='submit'>Subcribe</ButtonStyled>
    </FormSubscription>
  )
}