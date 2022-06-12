import React from 'react'

export const navigationOptions = [
    "Top",
    "Charaktere",
    "Gedichte",
    "Footer"
]

export const NavigationContext = React.createContext(navigationOptions[0])
export const SwitchNavigationContext = React.createContext(position => {})