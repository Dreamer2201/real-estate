import React from 'react'
import { Outlet } from "react-router-dom";
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { Container, ContainerMain } from './StyledLayout'

export default function Layout() {
  return (
    <Container>
        <Header />
        <ContainerMain>
        <Outlet />
        </ContainerMain>
        <Footer />
    </Container>
  )
}
