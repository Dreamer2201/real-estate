import React from 'react'
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { DivFormStyled, Modal, WrapperButtons, ButtonSingUpIn, Input, ButtonSubmit } from './StyledRegisterForm';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { registerUser, fetchLogin } from "../../../redux/api/usersAPI";

const modalRoot = document.getElementById('modal-root');


const RegisterForm = ({closeSignUp}) => {
    const [signUpIsOpen, setSignUpIsOpen] = useState(true)
    const [signInIsOpen, setSignInIsOpen] = useState(false)

    const signUpOpen = () => {
      setSignInIsOpen(false)
      setSignUpIsOpen(true)
    }
    const signInOpen = () => {
      setSignUpIsOpen(false)
      setSignInIsOpen(true)
}

    useEffect(() => {
		document.addEventListener('keydown', closeModal);
		return () => document.removeEventListener('keydown', closeModal);
	});

	const closeModal = ({ target, currentTarget, code }) => {
		if (target === currentTarget || code === 'Escape') {
			closeSignUp();
		}
	};

  
  const dispatch = useDispatch();
  const sendRegister = ({ name, password, email }, { resetForm }) => {
    dispatch(registerUser({ name, password, email }));
    resetForm()
    closeSignUp()
  };
  const sendLogin = ({ password, email }, { resetForm }) => {
    console.log(email)
    dispatch(fetchLogin({ password, email }));
    resetForm()
    closeSignUp()
  };

  
    return createPortal(
        <DivFormStyled >
          <Modal>
          <WrapperButtons>
            <ButtonSingUpIn onClick={() => signUpOpen()}>SIGN UP</ButtonSingUpIn>
            <ButtonSingUpIn onClick={() => signInOpen()}>SIGN IN</ButtonSingUpIn>
          </WrapperButtons>
      {signUpIsOpen && 
      <Formik
       initialValues={{ name: '', email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={sendRegister}
       
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <Form >
            <Input
             type="name"
             name="name"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.name}
           />
           {errors.name && touched.name && errors.name}
           <Input
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           />
           {errors.email && touched.email && errors.email}
           <Input
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />
           {errors.password && touched.password && errors.password}
           <ButtonSubmit type="submit" disabled={isSubmitting} >
             Submit
           </ButtonSubmit>
         </Form>
       )}
     </Formik>}
      {signInIsOpen && 
       <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={sendLogin}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <Form onSubmit={handleSubmit}>
          <Input
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           />
           {errors.email && touched.email && errors.email}
           <Input
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />
           {errors.password && touched.password && errors.password}
           <ButtonSubmit type="submit" disabled={isSubmitting} >
             Submit
           </ButtonSubmit>
         </Form>
       )}
     </Formik>}
           </Modal>
        </DivFormStyled>,
    modalRoot
  )
  }

export {RegisterForm}

