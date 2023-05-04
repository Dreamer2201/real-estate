import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DivFormStyled, Modal } from '../signUp/StyledRegisterForm';
import { Form } from '../../form/Form'
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from '../../../redux/auth/userSlice';
import { Formik } from 'formik';


const modalRoot = document.getElementById('modal-root');

const LoginForm = ({closeSignUp}) => {

  useEffect(() => {
		document.addEventListener('keydown', closeModal);
		return () => document.removeEventListener('keydown', closeModal);
	});

	const closeModal = ({ target, currentTarget, code }) => {
		if (target === currentTarget || code === 'Escape') {
			closeSignUp();
		}
	};

  return createPortal(
    <DivFormStyled onClick={closeModal}>
      <Modal>
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
   onSubmit={(values, { setSubmitting }) => {
     setTimeout(() => {
       alert(JSON.stringify(values, null, 2));
       setSubmitting(false);
     }, 400);
   }}
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
     <form onSubmit={handleSubmit}>
        <input
         type="name"
         name="name"
         onChange={handleChange}
         onBlur={handleBlur}
         value={values.name}
       />
       {errors.name && touched.name && errors.name}
       <input
         type="email"
         name="email"
         onChange={handleChange}
         onBlur={handleBlur}
         value={values.email}
       />
       {errors.email && touched.email && errors.email}
       <input
         type="password"
         name="password"
         onChange={handleChange}
         onBlur={handleBlur}
         value={values.password}
       />
       {errors.password && touched.password && errors.password}
       <button type="submit" disabled={isSubmitting} onClick={closeModal}>
         Submit
       </button>
     </form>
   )}
 </Formik>

        <p> Already have an account?
            <Link to='/login'>Sign in</Link>
        </p>

      </Modal>
   
    </DivFormStyled>,
modalRoot
)
}

export {LoginForm}
