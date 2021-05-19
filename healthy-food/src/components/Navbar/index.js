import React from 'react';
import { Navbar, Bars, NavMenu, NavCadastro, BotaoCadastro, LinkNavegacao } from './styles';

const NavbarHealthy = () => {
    return (
        <>
            <Navbar>
                <LinkNavegacao to='/'>
                    <h2>Healthy Food</h2>
                </LinkNavegacao>
                <Bars />
                <NavMenu>
                    <LinkNavegacao to='/#' activeStyle>
                        HEALTHY RECIPES
                    </LinkNavegacao>
                    <LinkNavegacao to='/#' activeStyle>
                        BLOG
                    </LinkNavegacao>
                    <LinkNavegacao to='/#' activeStyle>
                        JOIN
                    </LinkNavegacao>
                </NavMenu>
                <NavCadastro>
                    <BotaoCadastro to='/cadastro'>REGISTER</BotaoCadastro>
                </NavCadastro>
            </Navbar>
        </>
    );
};

export default NavbarHealthy;