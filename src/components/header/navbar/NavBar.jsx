import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Submenu from './Submenu';
import {StyledNavLink, StyledNavList, StyledNavLinkReg, StyledNavLinkLog, BtnBurgerMenu, IconSubMenuProjects, ProjectsWrapper } from './StyledNavBar';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { RegisterForm } from '../../Auth/signUp/RegisterForm';
import { LoginForm } from '../../Auth/login/LoginForm'


export default function NavBar() {
  const [isBurger, setIsBurger] = useState(false);
  const [isModalSignUp, setIsModalSignUp] = useState(false)
  const [isSubMenuShow, setisSubMenuShow] = useState(false)

  const toggleBurger = () => {
    setIsBurger(!isBurger)
  }
  const toggleSignUp = () => {
    setIsModalSignUp(!isModalSignUp)
  }
  const toggleSignIn = () => {
    setIsModalSignUp(!isModalSignUp)
  }
  const toggleSubMenu = () => {
    setisSubMenuShow(!isSubMenuShow);
  }

  return (
        <StyledNavList>
            <StyledNavLink to="/"> Home </StyledNavLink>
            <StyledNavLink to="/about"> About us </StyledNavLink>
            <ProjectsWrapper>
                <StyledNavLink to="/projects" onClick={toggleSubMenu}  > Projects 
                <IconSubMenuProjects />
                </StyledNavLink>
                {isSubMenuShow ? <Submenu onClose={toggleSubMenu} /> : <></>}
            </ProjectsWrapper>
            <StyledNavLink to="/news"> News </StyledNavLink>
            <StyledNavLink to="/addhouse">Add house</StyledNavLink>
            <StyledNavLinkReg type='button' onClick={() => toggleSignUp()} > Sign up </StyledNavLinkReg>
            <StyledNavLinkLog type='button' onClick={() => toggleSignUp()} > Sign in </StyledNavLinkLog>
            {isBurger ? <BurgerMenu onClose={toggleBurger} /> : <BtnBurgerMenu onClick={toggleBurger} type='button'>=</BtnBurgerMenu>}
            {isModalSignUp ? <RegisterForm closeSignUp={toggleSignUp}  /> : null}
            {/* {isModalSignUp ? <LoginForm closeSignUp={toggleSignUp}  /> : null} */}
        </StyledNavList>
  )
}
