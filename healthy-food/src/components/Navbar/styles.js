import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

import colors from '../../colors.json'

export const Navbar = styled.nav`
  height: 12vh;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 100;
  position: relative;
`;

export const LinkNavegacao = styled(Link)`
  color: ${colors.colors.white};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: ${colors.colors.white};
  }
  h2{
    color: ${colors.colors.green};
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: ${colors.colors.white};
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -2rem;
    color: ${colors.colors.green};
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavCadastro = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const BotaoCadastro = styled(Link)`
  border-radius: 4px;
  background: ${colors.colors.white};
  padding: 10px 22px;
  color: ${colors.colors.green};
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 2rem;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: ${colors.colors.white};
    background: ${colors.colors.green};
  }
`;