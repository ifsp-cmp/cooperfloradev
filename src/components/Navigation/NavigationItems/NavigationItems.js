import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

import './NavigationItems.css'

const navigationItems = () => (
    <ul className='NavigationItems'>
        <NavigationItem link='/' active>Home</NavigationItem>
        <NavigationItem link='/projeto'>O projeto</NavigationItem>
    </ul>
);

export default navigationItems;