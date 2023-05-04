import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { IoMdArrowDropdown } from "react-icons/io";

const StyledNavList = styled.nav`
    display: flex;
    justify-content: center;
    align-items: baseline;
    gap: 30px;
`;

const StyledNavLink = styled(NavLink)`
    @media (max-width: 767px) {
        display: none;
    }
    
    @media (min-width: 768px) {
        position: relative;
        text-decoration: none;
        font-size: 18px;
        color: #fff;

        &.active {
            color: red;
        };
    }
`;

const StyledNavLinkReg = styled.button`
    border-radius: 10px;
    padding: 10px auto;
    border: transparent;
    width: 100px;
    font-size: 14px;
    color: #ffffff;
    background-color: rgba(235, 164, 52);
    box-shadow: 7px -4px 27px 10px rgba(150,136,117,1);
`
const StyledNavLinkLog = styled(StyledNavLinkReg)`
`
const BtnBurgerMenu = styled.button`
@media (max-width: 767px) {
    display: block;
    width: 50px;
    height: 50px;
}
@media (min-width: 768px) {
    display: none;
}
`
const SubProjectsMenu = styled.ul`
        display: inline-block;
        position: absolute;
        top: 10px;
        left: 0px;
    
`
const IconSubMenuProjects = styled(IoMdArrowDropdown)`
    width: 20px;
    height: 20px;

`

const ProjectsWrapper = styled.div`
    position: relative;
`
const SubMenuList = styled.ul`
padding: 15px 5px 10px 5px ;
margin: 0;
    position: absolute;
    top: 28px;
    left: 25%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    background-color: rgba(150, 134, 134, 0.5);;
    border-radius: 4px;
`

export {StyledNavLink, StyledNavList, StyledNavLinkReg, StyledNavLinkLog, BtnBurgerMenu, SubProjectsMenu, IconSubMenuProjects, ProjectsWrapper, SubMenuList };