import { NavLink } from 'react-router-dom'

import logo from '../../assets/Ignite-logo.svg'
import { Scroll, Timer } from 'phosphor-react'

import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <nav>
        <NavLink to="/" end title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}