import React from 'react'

export const navigationOptions = [
    {
        name: "Top",
        ref: null,
    },
    {
        name: "Charaktere",
        ref: null,
    },
    {
        name: "Gedichte",
        ref: null,
    },
    {
        name: "Footer",
        ref: null,
    },
]

export const NavigationOptionsContext = React.createContext(navigationOptions)
export const SwitchNavigationOptionsContext = React.createContext(option => {})
export const NavigationContext = React.createContext(navigationOptions[0])
export const SwitchNavigationContext = React.createContext(position => {})