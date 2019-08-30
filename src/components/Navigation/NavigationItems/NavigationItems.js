import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

import './NavigationItems.css'

const navigationItems = () => (
    <ul className='NavigationItems'>
        <NavigationItem link='/' active>Home</NavigationItem>
        <NavigationItem link='/cooperflora'>Cooperflora</NavigationItem>
        <NavigationItem link='/projeto'>O projeto</NavigationItem>
        <NavigationItem link='/listarusuarios'>Listar</NavigationItem>
        <NavigationItem link='/training'>Formação</NavigationItem>
        <NavigationItem link='/cadastro'>Cadastro</NavigationItem>
        <NavigationItem link='/login'>Login</NavigationItem>
        <NavigationItem link='/logout'>Logout</NavigationItem>
    </ul>
);

export default navigationItems;